const FavoriteCrowdfund = require('../models/FavoriteCrowdfund');

// Mark a crowdfund as favorite
exports.markAsFavorite = async (req, res) => {
  try {
    const { user_id, crowdfund_id } = req.body;

    const favorite = new FavoriteCrowdfund({
      user_id,
      crowdfund_id,
    });

    await favorite.save();
    res.status(201).json({ message: 'Crowdfund marked as favorite', favorite });
  } catch (error) {
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
};
