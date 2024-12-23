const express = require('express');
const router = express.Router();
const {
    addDonation,
    getAllDonations,
    getDonationsByCrowdfund,
} = require('../controllers/donationController');

// Rute donasi
router.post('/', addDonation);
router.get('/', getAllDonations);
router.get('/:crowdfund_id', getDonationsByCrowdfund);

module.exports = router;
