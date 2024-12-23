const express = require('express');
const { getUsers } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get all users
router.get('/', authMiddleware, adminMiddleware, getUsers);

module.exports = router;
