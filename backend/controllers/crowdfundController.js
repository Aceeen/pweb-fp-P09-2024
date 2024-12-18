const Crowdfund = require('../models/Crowdfund');

// Get all crowdfunds
exports.getAllCrowdfunds = async (req, res) => {
  try {
    const crowdfunds = await Crowdfund.find();
    res.status(200).json(crowdfunds);
  } catch (error) {
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
};
