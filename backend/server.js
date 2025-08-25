import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { fetchIssLocationAndSave } from "./services/issService.js";
import issRoutes from "./routes/issRoutes.js";

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

app.use(cors());
app.use(express.json());

app.use("/api", issRoutes);

app.get("/", (req, res) => {
  res.send("ISS Tracker Backend is running!");
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);

  const FETCH_INTERVAL = 1000;
  setInterval(() => {
    fetchIssLocationAndSave(io);
  }, FETCH_INTERVAL);
});
