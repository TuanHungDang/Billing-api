/*Bảng SubscriptionPlan
name: Tên gói thanh toán (e.g., Basic, Premium).
price: Giá của gói (Number).
limit: Giới hạn đặc quyền (e.g., số lần request/tháng).
description: Mô tả chi tiết gói (String).*/

import mongoose from 'mongoose';

const SubscriptionPlanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    limit: { type: Number, required: true },
    description: { type: String },
});

export default SubscriptionPlanSchema;
