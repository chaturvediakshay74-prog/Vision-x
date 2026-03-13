const express = require('express');
const router = express.Router();

// Get timetable
router.get('/', (req, res) => {
  res.json({ message: 'Timetable endpoint' });
});

// Update timetable
router.put('/', (req, res) => {
  res.json({ message: 'Update timetable endpoint' });
});

module.exports = router;
