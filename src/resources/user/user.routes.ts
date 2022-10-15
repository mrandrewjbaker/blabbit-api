import express from 'express';
import { authLoginController, authRegisterController } from '../auth/auth.controllers';

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/register', authRegisterController)

userRouter.post('/login', authLoginController)

export {
  userRouter
}