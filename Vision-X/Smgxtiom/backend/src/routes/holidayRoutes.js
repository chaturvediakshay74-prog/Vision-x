const express = require('express');
const router = express.Router();

// Get holidays
router.get('/', (req, res) => {
  res.json({ message: 'Holidays endpoint' });
});

module.exports = router;
