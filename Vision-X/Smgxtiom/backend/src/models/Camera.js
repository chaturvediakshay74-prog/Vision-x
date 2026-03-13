const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  quality: {
    type: String,
    enum: ['360p', '720p', '1080p', '4K'],
    default: '1080p',
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'offline'],
    default: 'active',
  },
  streamUrl: String,
  lastOnline: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('Camera', cameraSchema);
