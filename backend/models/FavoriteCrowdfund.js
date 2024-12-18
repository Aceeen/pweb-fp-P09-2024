const mongoose = require('mongoose');

const FavoriteCrowdfundSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  crowdfund_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Crowdfund', required: true },
});

module.exports = mongoose.model('FavoriteCrowdfund', FavoriteCrowdfundSchema);
