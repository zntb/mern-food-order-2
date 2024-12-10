import express from 'express';
import {
  getAllUsers,
  getUserById,
  loginUser,
  registerUser,
} from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;
