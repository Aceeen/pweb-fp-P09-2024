const mongoose = require('mongoose');

const CrowdfundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  target: { type: String, required: true },
  current_donation: { type: Number, default: 0 },
  status: { type: String, enum: ['OPEN', 'CLOSE'], default: 'OPEN' },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Crowdfund', CrowdfundSchema);
