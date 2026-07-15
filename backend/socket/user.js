module.exports = (io, socket, prisma, onlineUserMap) => {
  socket.on("user:register", (userId) => {
    onlineUserMap.set(Number(userId), socket.id);
    console.log(`User ${userId} connected with socket id ${socket.id}`);

    socket.emit(
      "user:list",
      Array.from(onlineUserMap.entries()).map(([userId, socketId]) => ({
        userId,
        socketId,
      }))
    );

    socket.broadcast.emit("user:connected", {
      userId: Number(userId),
      socketId: socket.id,
    });

    socket.broadcast.emit("message:receive:new", { userId });
  });
};
