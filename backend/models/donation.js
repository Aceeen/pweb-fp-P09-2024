const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
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
    payment_method: {
        type: String,
        enum: ['QRIS', 'TRANSFER'],
        required: true,
    },
    bank_name: {
        type: String,
        required: function () {
            return this.payment_method === 'TRANSFER';
        },
    },
    amount: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Donation', DonationSchema);
