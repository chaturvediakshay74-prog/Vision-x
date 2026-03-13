const express = require('express');
const { authenticate } = require('../middleware/auth');
const {
  register,
  login,
  getCurrentUser,
  logout,
} = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticate, getCurrentUser);
router.post('/logout', authenticate, logout);

module.exports = router;
