// backend/server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const { PrismaClient } = require('./generated/prisma'); // pastikan path ini sesuai dengan struktur project kamu
const prisma = new PrismaClient();


const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'], // nanti ganti ke domain frontend kamu kalau sudah deploy
    methods: ["GET", "POST"],
  },
});

const onlineUserMap = new Map()
const activeRooms = new Map()

io.on("connection", (socket) => {
  console.log(`a client connected with ${socket.id} id`)
  socket.on("register", (userId) => {
    onlineUserMap.set(Number(userId), socket.id)
    console.log(`User ${userId} connected with socket id ${socket.id}`);
    // console.log("Online users:", Array.from(onlineUserMap.entries()).map(([userId, socketId]) => ({
    //   userId,
    //   socketId
    // })));
    // console.log('raw onlien users', onlineUserMap)

    socket.emit("receive-online-users", Array.from(onlineUserMap.entries()).map(([userId, socketId]) => ({
      userId,
      socketId
    })));

    socket.broadcast.emit("user-connected", {
      userId: Number(userId),
      socketId: socket.id,
    });

    socket.broadcast.emit('update-not-delivered-messages', {userId})
  })

  socket.on('receive-new-messages', async (data) => {
    const { userId } = data;

    try {
      const statusUpdatedMessages = await prisma.messages.updateMany({
        where: {
          conversation: {
            members: {
              some: {
                userId: Number(userId),
              },
            },
          },
          status: 'NOT_DELIVERED',
        },
        data: {
          status: 'DELIVERED',
        },
      })

      io.to(socket.id).emit('new-messages-received', {statusUpdated: true})
    } catch (error) {
      console.error("Error updating message status:", error);
    }
  })

  socket.on("send-friend-request", async ({toUserId, friendshipId, from}) => {
    const targetSocketId = onlineUserMap.get(toUserId)
    if(targetSocketId){
      io.to(targetSocketId).emit('friend-request-received', {
        type: 'friend-request',
        friendshipId,
        from: {
          userId: from.userId,
          username: from.username,
          user_atribut: {
            pfp_id: from.user_atribut.pfp_id
          }
        },
        createdAt: new Date(),
      })
    }
  })

  socket.on("join-room", async ({ userId, conversationId }) => {
    const socketId = onlineUserMap.get(userId);
    if (!socketId) {
      socket.emit('error-message', 'User not authenticated or not connected');
      return;
    }

    const roomMembers = activeRooms.get(conversationId);

    if (roomMembers) {
      const alreadyJoined = roomMembers.some((user) => user.userId === userId);
      if (alreadyJoined) return;

      socket.join(conversationId);
      activeRooms.set(conversationId, [
        ...roomMembers,
        { userId, socketId },
      ]);
    } else {
      socket.join(conversationId);
      activeRooms.set(conversationId, [{ userId, socketId }]);
    }

    try {
      const updateMsgStatus = await prisma.messages.updateMany({
        where: {
          conversationId,
          status: 'DELIVERED',
          senderId: {
            not: userId,
          },
        },
        data: {
          status: 'SEEN'
        }
      })
    } catch (error) {
      console.error('error updating message status:', error);
      socket.emit('error-message', 'Failed to update messages status');
    }

    io.to(conversationId).emit("user-joined-room", { userId, conversationId });
    socket.broadcast.emit('status-to-seen', {
      conversationId,
      userId,
    })
    console.log(`User ${userId} joined room ${conversationId}`);
    console.log(activeRooms);
  });

  socket.on("leave-room", ({ userId, conversationId }) => {
    socket.leave(conversationId);
    socket.to(conversationId).emit("user-left-room", { userId });

    const roomMembers = activeRooms.get(conversationId);
    if (!roomMembers) return;

    const filtered = roomMembers.filter((user) => user.userId !== userId);

    if (filtered.length === 0) {
      activeRooms.delete(conversationId);
    } else {
      activeRooms.set(conversationId, filtered);
    }

    console.log(`User ${userId} left room ${conversationId}`);
    console.log(activeRooms);
  });


  socket.on("send-message", async ({ id: temporaryId, conversationId, senderId, senderUsername, senderPfp_id, content, sentAt }) => {
    try {
      // Ambil data conversation + semua member-nya
      const conversation = await prisma.conversations.findUnique({
        where: { id: conversationId },
        include: {
          members: {
            select: { userId: true },
          },
        },
      });

      if (!conversation) {
        return socket.emit("error-message", "Percakapan tidak ditemukan");
      }

      const members = conversation.members;
      const recipientUsers = members.filter(member => member.userId !== senderId);

      // Cek status penerima (anggap 1 lawan 1)
      const oppUser = recipientUsers[0]; // kalau lebih dari 2 user, ini perlu di-loop
      const oppUserId = oppUser?.userId;
      const oppSocketId = onlineUserMap.get(oppUserId);
      const roomUsers = activeRooms.get(conversationId) ?? [];
      const isOppInRoom = roomUsers.some(user => user.userId === oppUserId);

      const statusToSave = oppSocketId ? (isOppInRoom ? "SEEN" : "DELIVERED") : "NOT_DELIVERED";

      // Emit status ke pengirim (update dari client pake temporaryId)
      io.to(conversationId).emit("message-status", {
        temporaryId,
        status: statusToSave,
      });

      // Simpan pesan
      const saved = await prisma.messages.create({
        data: {
          id: crypto.randomUUID(),
          conversationId,
          senderId,
          senderUsername,
          senderPfp_id,
          content,
          sentAt,
          status: statusToSave,
        },
      });

      // Emit ke semua user di room (kecuali pengirim)
      socket.to(conversationId).emit("receive-message", {
        temporaryId,
        id: saved.id,
        conversationId,
        senderId,
        senderUsername,
        senderPfp_id,
        content,
        sentAt,
        status: statusToSave,
      });

      // Emit preview ke semua member yang online (kecuali pengirim)
      members.forEach(member => {
        const targetSocket = onlineUserMap.get(member.userId);
        if (targetSocket) {
          io.to(targetSocket).emit("new-preview-message", {
            temporaryId,
            id: saved.id,
            conversationId,
            senderId,
            senderUsername,
            senderPfp_id,
            content,
            sentAt,
            status: statusToSave,
          });
          if(member.userId !== senderId){
            io.to(targetSocket).emit("new-message-notification", {
              id: saved.id,
              type: 'message',
              conversationId,
              from: {
                senderId,
                senderUsername,
                senderPfp_id,
              },
              content              
            })
          }
        }
      });

    } catch (err) {
      console.error("Gagal kirim pesan:", err);
      socket.emit("error-message", "Gagal mengirim pesan.");
    }
  });

  socket.on('status-typing', ({conversationId, userId, typing}) => {
    console.log(`user ${userId} sedang mengetik`)
    const response = {
      senderId: userId,
      typing: typing,
    }

    socket.to(conversationId).emit("show-typing-status", response)
  });

  socket.on("disconnect", (reason) => {
    for (let [userId, socketId] of onlineUserMap.entries()) {
      if (socketId === socket.id) {
        console.log(`user ${userId} disconnected wth socket id ${socket.id} ${reason ? `due to ${reason}` : ''}`);
        onlineUserMap.delete(userId);
        socket.broadcast.emit("user-disconnected", { userId });
        break;
      }
    }

    if (activeRooms.size !== 0) {
      const arrOfActiveRooms = Array.from(activeRooms.entries()).map(([conversationId, users]) => ({
        conversationId,
        users,
      }));

      let lastVisitedRoom = null;

      for (const { conversationId, users } of arrOfActiveRooms) {
        const user = users.find((u) => u.socketId === socket.id);
        if (user) {
          lastVisitedRoom = { conversationId, user };
          break;
        }
      }

      if (lastVisitedRoom) {
        const usersInRoom = activeRooms.get(lastVisitedRoom.conversationId);
        const filteredUsers = usersInRoom.filter((u) => u.socketId !== socket.id);

        if (filteredUsers.length === 0) {
          activeRooms.delete(lastVisitedRoom.conversationId);
        } else {
          activeRooms.set(lastVisitedRoom.conversationId, filteredUsers);
        }

        console.log(activeRooms);
      }
    }
  });
});

const PORT = process.env.NODE_PORT || 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
