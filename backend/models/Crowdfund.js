const mongoose = require('mongoose');

// Enum for crowdfund status
const CrowdfundStatus = ['OPEN', 'CLOSE'];

// Comment Schema
const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// FavoriteCrowdfund Schema
const FavoriteCrowdfundSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  crowdfund_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crowdfund',
    required: true,
  },
});

// Crowdfund Schema
const crowdfundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  target: { type: Number, required: true },
  current_donation: { type: Number, default: 0 },
  status: {
    type: String,
    enum: CrowdfundStatus, // Enum for crowdfund status
    default: 'OPEN',
  },
  favorite_crowdfund: {
    type: [FavoriteCrowdfundSchema], // Array of favorite crowdfund
    required: false,
  },
  comments: [commentSchema], // Array of comments for the crowdfund
  createdAt: { type: Date, default: Date.now },
});

// Check if model is already defined to avoid overwrite error
const Crowdfund = mongoose.models.Crowdfund || mongoose.model('Crowdfund', crowdfundSchema);

module.exports = Crowdfund;
