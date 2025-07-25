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
  })

  socket.on("send-friend-request", ({toUserId, from}) => {
    const targetSocketId = onlineUserMap.get(toUserId)
    if(targetSocketId){
      io.to(targetSocketId).emit('friend-request-received', {
        from
      })
    }
  })

  socket.on("join-room", ({ userId, conversationId }) => {
    const socketId = onlineUserMap.get(userId);
    if (!socketId) return;

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

    socket.to(conversationId).emit("user-joined-room", { userId });
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


  socket.on("send-message", async ({id, conversationId, senderId, content, sentAt, status}) => {
    const memberIds = await prisma.conversations.findUnique({
      where: {
        id: conversationId,
      }, 
      include: {
        members: {
          select: {
            userId: true,
          },
        },
      },
    })

    try {
      const saved = await prisma.messages.create({
        data: {
          id: crypto.randomUUID(),
          conversationId,
          senderId,
          content,
          sentAt,
          status: 'DELIVERED',
        },
      });
      socket.emit("receive-message", {
        id: saved.id,
        temporaryId: id,
        conversationId: saved.conversationId,
        senderId: saved.senderId,
        content: saved.content,
        sentAt: saved.sentAt,
        status: 'DELIVERED'
      });

      socket.to(conversationId).emit("receive-message", {
        id: saved.id,
        conversationId: saved.conversationId,
        senderId: saved.senderId,
        content: saved.content,
        sentAt: saved.sentAt,
        status: 'DELIVERED'
      });

      memberIds.members.forEach(member => {
        if (member.userId === senderId) return;
        console.log('terkirim ke', member.userId)
        io.to(onlineUserMap.get(member.userId)).emit("new-preview-message", {
          id: saved.id,
          conversationId: saved.conversationId,
          senderId: saved.senderId,
          content: saved.content, 
          sentAt: saved.sentAt,
          status: 'DELIVERED'
        })
      })
    } catch (err) {
      console.error("Failed to save message:", err);
      socket.emit("error-message", "Gagal kirim pesan");
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
