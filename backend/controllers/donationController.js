const Donation = require('../models/Donation');

// Submit a donation
exports.submitDonation = async (req, res) => {
  try {
    const { payment_method, amount } = req.body;

    const donation = new Donation({
      payment_method,
      amount,
    });

    await donation.save();
    res.status(201).json({ message: 'Donation submitted successfully', donation });
  } catch (error) {
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
};
