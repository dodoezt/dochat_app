const crypto = require("crypto");

module.exports = (io, socket, prisma, onlineUserMap, activeRooms) => {
  socket.on("message:receive:new", async ({ userId }) => {
    try {
      await prisma.messages.updateMany({
        where: {
          conversation: {
            members: {
              some: { userId: Number(userId) },
            },
          },
          status: "NOT_DELIVERED",
          senderId: { not: Number(userId) },
        },
        data: { status: "DELIVERED" },
      });

      io.to(socket.id).emit("message:received:confirm", {
        statusUpdated: true,
      });
    } catch (error) {
      console.error("Error updating message status:", error);
    }
  });

  socket.on(
    "message:send",
    async ({
      id: temporaryId,
      conversationId,
      senderId,
      senderUsername,
      senderPfp_id,
      content,
      sentAt,
    }) => {
      try {
        const conversation = await prisma.conversations.findUnique({
          where: { id: conversationId },
          include: { members: { select: { userId: true } } },
        });

        if (!conversation) {
          return socket.emit("error", "Conversation not found");
        }

        const members = conversation.members;
        const recipientUsers = members.filter(
          (member) => member.userId !== senderId
        );

        const oppUser = recipientUsers[0];
        const oppUserId = oppUser?.userId;
        const oppSocketId = onlineUserMap.get(oppUserId);
        const roomUsers = activeRooms.get(conversationId) ?? [];
        const isOppInRoom = roomUsers.some((user) => user.userId === oppUserId);

        const statusToSave = oppSocketId
          ? isOppInRoom
            ? "SEEN"
            : "DELIVERED"
          : "NOT_DELIVERED";

        io.to(conversationId).emit("message:status:update", {
          temporaryId,
          status: statusToSave,
        });

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

        socket.to(conversationId).emit("message:received", {
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

        members.forEach((member) => {
          const targetSocket = onlineUserMap.get(member.userId);
          if (targetSocket) {
            io.to(targetSocket).emit("message:preview", {
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
            if (member.userId !== senderId) {
              io.to(targetSocket).emit("message:notification", {
                id: saved.id,
                type: "message",
                conversationId,
                from: { senderId, senderUsername, senderPfp_id },
                content,
              });
            }
          }
        });
      } catch (err) {
        console.error("Failed to send message:", err);
        socket.emit("error", "Failed to send message.");
      }
    }
  );
};
