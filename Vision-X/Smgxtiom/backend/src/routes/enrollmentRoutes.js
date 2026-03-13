const express = require('express');

const router = express.Router();

// Placeholder routes for enrollments, videos, exams, etc.
// These can be extended with full CRUD operations

// Get user enrollments
router.get('/my-courses', (req, res) => {
  res.json({ message: 'User courses endpoint' });
});

// Get course progress
router.get('/:courseId/progress', (req, res) => {
  res.json({ message: 'Course progress endpoint' });
});

module.exports = router;
