module.exports = (io, socket) => {
  socket.on("typing:status", ({ conversationId, userId, typing }) => {
    console.log(`user ${userId} is typing...`);
    socket.to(conversationId).emit("typing:show", {
      senderId: userId,
      typing,
    });
  });
};
