import mongoose from "mongoose";

const IssPositionSchema = mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const IssPosition = mongoose.model("IssPosition", IssPositionSchema);

export default IssPosition;
