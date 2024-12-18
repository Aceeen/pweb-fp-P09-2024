const express = require('express');
const { markAsFavorite } = require('../controllers/favoriteController');

const router = express.Router();

router.post('/', markAsFavorite);

module.exports = router;
