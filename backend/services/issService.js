import axios from "axios";
import IssPosition from "../models/IssPosition.js";

const ISS_API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

const MAX_RECORDS = 4000;

export const fetchIssLocationAndSave = async (io) => {
  try {
    const response = await axios.get(ISS_API_URL);

    const { latitude, longitude, altitude, velocity } = response.data;

    const newPosition = new IssPosition({
      latitude,
      longitude,
      altitude,
      velocity,
    });

    await newPosition.save();

    const count = await IssPosition.countDocuments();
    if (count > MAX_RECORDS) {
      await IssPosition.deleteMany({})
        .sort({ timestamp: 1 })
        .limit(count - MAX_RECORDS);
    }

    const locationData = {
      lat: latitude,
      lng: longitude,
      alt: altitude,
      vel: velocity,
      timestamp: newPosition.timestamp,
    };
    io.emit("iss-location-update", locationData);
  } catch (error) {
    console.error("Error fetching or saving ISS location:", error.message);
  }
};
