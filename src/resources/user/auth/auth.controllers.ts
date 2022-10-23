import { Response } from "express";
import { authRegisterService, authLoginService } from "./auth.services";

const authRegisterController = async (req:any, res: Response) => {
  const { email, username, password } = req.body;
  await authRegisterService(email, username, password, res);
}

const authLoginController = async (req:any, res: Response) => {
  const { username, password } = req.body;
  await authLoginService(username, password, res);
}

export { 
  authRegisterController,
  authLoginController
};