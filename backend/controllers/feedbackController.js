const Feedback = require('../models/Feedback');

// Submit feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, message, is_anonymous } = req.body;

    const feedbackData = {
      message,
      is_anonymous,
      name: is_anonymous ? 'Anonymous' : name,
      email: is_anonymous ? '' : email,
    };

    const feedback = new Feedback(feedbackData);
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error', details: error.message });
  }
};
