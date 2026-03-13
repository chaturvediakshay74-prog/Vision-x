const Attendance = require('../models/Attendance');

// Record attendance
exports.recordAttendance = async (req, res) => {
  try {
    const { studentId, status, courseId } = req.body;

    const attendance = new Attendance({
      student: studentId,
      course: courseId,
      status,
      date: new Date(),
    });

    await attendance.save();
    res.status(201).json({ message: 'Attendance recorded', attendance });
  } catch (error) {
    res.status(500).json({ message: 'Failed to record attendance', error: error.message });
  }
};

// Get attendance
exports.getAttendance = async (req, res) => {
  try {
    const { studentId, courseId } = req.query;
    let filter = {};

    if (studentId) filter.student = studentId;
    if (courseId) filter.course = courseId;

    const attendance = await Attendance.find(filter).populate('student').populate('course');
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch attendance', error: error.message });
  }
};

// Get my attendance
exports.getMyAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ student: req.userId }).populate('course');
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch attendance', error: error.message });
  }
};
