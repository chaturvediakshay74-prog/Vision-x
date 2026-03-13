const express = require('express');
const { authenticate } = require('../middleware/auth');
const {
  recordAttendance,
  getAttendance,
  getMyAttendance,
} = require('../controllers/attendanceController');

const router = express.Router();

router.post('/', authenticate, recordAttendance);
router.get('/', authenticate, getAttendance);
router.get('/my-attendance', authenticate, getMyAttendance);

module.exports = router;
