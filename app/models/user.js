/*Bảng User
name: Tên người dùng (String).
email: Email của người dùng (String, unique).
address: Địa chỉ của người dùng (String).
activePlan: ID của gói hiện tại (ObjectId tham chiếu đến SubscriptionPlan).*/


import mongoose from 'mongoose';

// Kiểm tra xem model đã được định nghĩa trước đó chưa
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  activePlan: { type: String },
}));

export default User;


