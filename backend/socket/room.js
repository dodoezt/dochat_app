module.exports = (io, socket, prisma, onlineUserMap, activeRooms) => {
  socket.on("room:join", async ({ userId, conversationId }) => {
    const socketId = onlineUserMap.get(userId);
    if (!socketId) {
      socket.emit("error", "User not authenticated or not connected");
      return;
    }

    const roomMembers = activeRooms.get(conversationId);

    if (roomMembers) {
      const alreadyJoined = roomMembers.some((user) => user.userId === userId);
      if (alreadyJoined) return;

      socket.join(conversationId);
      activeRooms.set(conversationId, [...roomMembers, { userId, socketId }]);
    } else {
      socket.join(conversationId);
      activeRooms.set(conversationId, [{ userId, socketId }]);
    }

    try {
      await prisma.messages.updateMany({
        where: {
          conversationId,
          status: "DELIVERED",
          senderId: { not: userId },
        },
        data: { status: "SEEN" },
      });
    } catch (error) {
      console.error("error updating message status:", error);
      socket.emit("error", "Failed to update messages status");
    }

    io.to(conversationId).emit("room:user-joined", { userId, conversationId });
    socket.broadcast.emit("message:status:seen", { conversationId, userId });

    console.log(`User ${userId} joined room ${conversationId}`);
    console.log(activeRooms);
  });

  socket.on("room:leave", ({ userId, conversationId }) => {
    socket.leave(conversationId);
    socket.to(conversationId).emit("room:user-left", { userId });

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
};
