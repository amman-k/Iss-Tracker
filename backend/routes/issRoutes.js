import express from "express";
import IssPosition from "../models/IssPosition.js";

const router = express.Router();

router.get("/iss-history", async (req, res) => {
  try {
    const history = await IssPosition.find()
      .sort({ timestamp: -1 })
      .limit(1000);
    res.json(history);
  } catch (error) {
    console.error("Error fetching ISS history:", error);
    res.status(500).json({ message: "Failed to fetch ISS history" });
  }
});

export default router;
