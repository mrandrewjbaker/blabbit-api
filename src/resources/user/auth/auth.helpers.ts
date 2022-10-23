import jwt from 'jsonwebtoken';
import { getUserByEmailModelFunction, getUserByUsernameModelFunction } from "../../../models/user";


const authValidateUserEmailHelper = async (email: string) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

const  authCheckUserExistsByEmailHelper = async (email: string) => {
  const userEmailExists = await getUserByEmailModelFunction(email);
  return userEmailExists;
}

const authCheckUserExistsByUsernameHelper = async (username: string) => {
  const userUsernameExists = await getUserByUsernameModelFunction(username);
  return userUsernameExists;
}

const generateJsonWebTokenHelper = (userId: string, username: string, email: string) => {
  const token = jwt.sign({ userId, username, email }, process.env.JWT_SECRET_0, { expiresIn: 86400 });

}

export {
  authValidateUserEmailHelper,
  authCheckUserExistsByEmailHelper,
  authCheckUserExistsByUsernameHelper,
}