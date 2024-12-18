const express = require('express');
const { getAllCrowdfunds } = require('../controllers/crowdfundController');

const router = express.Router();

router.get('/', getAllCrowdfunds);

module.exports = router;
