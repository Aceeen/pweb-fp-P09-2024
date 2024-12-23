const express = require('express');
const router = express.Router();
const {
    createCrowdfunding,
    getAllCrowdfunds,
    getCrowdfundDetail,
    getActiveCrowdfunds,
    closeCrowdfund,
    addComment,
    addFavorite,
    getFavorites, // Tambahkan ini
    deleteFavorite, // Tambahkan ini
} = require('../controllers/crowdfundingController');

// Rute crowdfunding
router.post('/', createCrowdfunding);
router.get('/', getAllCrowdfunds);
router.get('/active', getActiveCrowdfunds);
router.get('/:id', getCrowdfundDetail);
router.patch('/:id/close', closeCrowdfund);
router.post('/comment', addComment);
router.post('/favorite', addFavorite);

// Rute baru untuk favorit
router.get('/favorite/show', getFavorites); // Rute untuk menampilkan favorit
router.delete('/favorite/delete', deleteFavorite); // Rute untuk menghapus favorit

module.exports = router;
