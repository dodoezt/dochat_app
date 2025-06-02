// backend/server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();


const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'], // nanti ganti ke domain frontend kamu kalau sudah deploy
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join-room", (roomId) => {
    socket.join(roomId)
    console.log('joined in', roomId)
  })

  socket.on("send-message", ({conversationId, senderId, text}) => {
    const message = {
      id: crypto.randomUUID(),
      conversationId,
      senderId,
      text,
      createdAt: new Date().toISOString(),
      delivered: true,
    };
    
    socket.to(conversationId).emit("receive-message", message);
    console.log(`Message sent in room ${conversationId}:`, text);

    // try {
    //   const saved = await prisma.message.create({
    //     data: {
    //       conversationId,
    //       senderId,
    //       text,
    //       delivered: true,
    //     },
    //   });

    //   io.to(conversationId).emit("receive-message", saved);
    // } catch (err) {
    //   console.error("Failed to save message:", err);
    //   socket.emit("error-message", "Gagal kirim pesan");
    // }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.NODE_PORT || 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
