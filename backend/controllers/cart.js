import cartModel from '../models/cart.js';
import userModel from '../models/user.js';

// add items to user cart
const addToCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    const cart = await cartModel.findOne({ userId: user._id });
    if (!cart) {
      const newCart = new cartModel({
        userId: user._id,
        foodId: req.body.id,
        quantity: 1,
      });
      await newCart.save();
    } else {
      const newCart = new cartModel({
        userId: user._id,
        foodId: req.body.id,
        quantity: cart.quantity + 1,
      });
      await newCart.save();
    }
    res.json({ success: true, message: 'Item added to cart' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error adding item to cart' });
  }
};

// remove items from user cart
const removeFromCart = async (req, res) => {};

// fetch user cart data
const getUserCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    const cart = await cartModel.find({ userId: user._id });
    res.json({ success: true, data: cart });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: 'Error getting cart' });
  }
};

export { addToCart, removeFromCart, getUserCart };
