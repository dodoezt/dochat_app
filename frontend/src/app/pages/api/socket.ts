import { Server } from "socket.io";

export default function handler(req: Request, res: any) {
  if (res.socket.server.io) {
    console.log("Socket sudah jalan");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", socket => {
    console.log("User connected");

    socket.on("send-message", (msg) => {
      io.emit("receive-message", msg); // kirim ke semua user
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  res.end();
}
