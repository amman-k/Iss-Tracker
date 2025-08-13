import mongoose from 'mongoose';

const IssPositionSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },

  altitude: {
    type: Number,
    required: false 
  },
  velocity: {
    type: Number,
    required: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const IssPosition = mongoose.model('IssPosition', IssPositionSchema);

export default IssPosition;
