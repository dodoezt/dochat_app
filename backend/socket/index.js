const userEvents = require("./user");
const friendEvents = require("./friend");
const roomEvents = require("./room");
const messageEvents = require("./message");
const typingEvents = require("./typing");

module.exports = (io, prisma, onlineUserMap, activeRooms) => {
  io.on("connection", (socket) => {
    console.log(`a client connected with ${socket.id} id`);

    // Register all event handlers
    userEvents(io, socket, prisma, onlineUserMap);
    friendEvents(io, socket, prisma, onlineUserMap);
    roomEvents(io, socket, prisma, onlineUserMap, activeRooms);
    messageEvents(io, socket, prisma, onlineUserMap, activeRooms);
    typingEvents(io, socket);

    // Disconnect handler
    socket.on("disconnect", (reason) => {
      for (let [userId, socketId] of onlineUserMap.entries()) {
        if (socketId === socket.id) {
          console.log(
            `user ${userId} disconnected with socket id ${socket.id} ${
              reason ? `due to ${reason}` : ""
            }`
          );
          onlineUserMap.delete(userId);
          socket.broadcast.emit("user:disconnected", { userId });
          break;
        }
      }

      if (activeRooms.size !== 0) {
        for (const [conversationId, users] of activeRooms.entries()) {
          const filteredUsers = users.filter((u) => u.socketId !== socket.id);
          if (filteredUsers.length === 0) {
            activeRooms.delete(conversationId);
          } else {
            activeRooms.set(conversationId, filteredUsers);
          }
        }
      }
    });
  });
};
