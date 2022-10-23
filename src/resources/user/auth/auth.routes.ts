import express from 'express';
import { authLoginController, authRegisterController } from './auth.controllers';

const authRouter = express.Router({ mergeParams: true });

authRouter.post('/register', authRegisterController)

authRouter.post('/login', authLoginController)

export {
  authRouter
}