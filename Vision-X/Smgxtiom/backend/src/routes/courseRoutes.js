const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
} = require('../controllers/courseController');

const router = express.Router();

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);

// Protected routes
router.post('/enroll', authenticate, enrollCourse);

// Teacher/Admin routes
router.post('/', authenticate, authorize('teacher', 'admin'), createCourse);
router.put('/:id', authenticate, authorize('teacher', 'admin'), updateCourse);
router.delete('/:id', authenticate, authorize('teacher', 'admin'), deleteCourse);

module.exports = router;
