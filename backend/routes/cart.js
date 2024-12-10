import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { addToCart, removeFromCart, getUserCart } from '../controllers/cart.js';

const cartRouter = express.Router();

cartRouter.use(authMiddleware); // Use the auth middleware for all routes in the cartRouter

cartRouter.post('/add', addToCart);
cartRouter.post('/remove', removeFromCart);
cartRouter.get('/:id', getUserCart);

export default cartRouter;
