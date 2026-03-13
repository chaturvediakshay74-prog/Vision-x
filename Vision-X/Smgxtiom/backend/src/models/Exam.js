const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  duration: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
      marks: Number,
    },
  ],
  submissions: [
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      answers: [String],
      obtainedMarks: Number,
      percentage: Number,
      submittedAt: Date,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);
