const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  url: String,
  duration: String,
  order: Number,
  thumbnail: String,
  resources: [
    {
      type: String,
      url: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);
