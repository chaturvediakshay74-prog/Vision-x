const express = require('express');
const router = express.Router();

// Get announcements
router.get('/', (req, res) => {
  res.json({ message: 'Announcements endpoint' });
});

// Create announcement
router.post('/', (req, res) => {
  res.json({ message: 'Create announcement endpoint' });
});

module.exports = router;
