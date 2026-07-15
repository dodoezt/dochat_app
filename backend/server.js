const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// shared state
const onlineUserMap = new Map();
const activeRooms = new Map();

// Import socket handlers
require("./socket")(io, prisma, onlineUserMap, activeRooms);

const PORT = process.env.NODE_PORT || 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
