require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const feedbackRoutes = require('./routes/feedbackRoutes');
const crowdfundRoutes = require('./routes/crowdfundRoutes');
const donationRoutes = require('./routes/donationRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api/feedback', feedbackRoutes);
app.use('/api/crowdfunds', crowdfundRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/favorites', favoriteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
