const mongoose = require('mongoose');

const paymentHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subscriptionPlan: { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionPlan', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['Success', 'Failed'], default: 'Success' },
});

module.exports = mongoose.model('PaymentHistory', paymentHistorySchema);
