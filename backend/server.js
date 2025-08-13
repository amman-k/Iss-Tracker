import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);

app.use(cors());

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("ISS Tracker Backend is running!");
});

server.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
