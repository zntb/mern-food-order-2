import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'food' },
  quantity: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const cartModel = mongoose.models.cart || mongoose.model('cart', cartSchema);

export default cartModel;
