const express = require('express');
const { submitDonation } = require('../controllers/donationController');

const router = express.Router();

router.post('/', submitDonation);

module.exports = router;
