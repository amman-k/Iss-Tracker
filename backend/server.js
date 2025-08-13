import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { fetchIssLocationAndSave } from "./services/issService.js";

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`A user connected with socket id: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const FETCH_INTERVAL = 5000;
setInterval(fetchIssLocationAndSave, FETCH_INTERVAL);
app.use(cors());

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("ISS Tracker Backend is running!");
});

server.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
