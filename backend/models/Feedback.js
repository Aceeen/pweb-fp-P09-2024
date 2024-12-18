const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: String,
  is_anonymous: Boolean,
  email: String,
  message: String,
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
