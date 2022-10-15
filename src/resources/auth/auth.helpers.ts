import { getUserByEmailModelFunction, getUserByUsernameModelFunction, loginUserAuthModelFunction, registerUserAuthModelFunction } from "../../models/user";


const validateEmailHelper = async (email: string) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

const checkUserByEmailExistsHelper = async (email: string) => {
  const userByEmailExists = await getUserByEmailModelFunction(email);
  return userByEmailExists;
}

const checkUserByUsernameExistsHelper = async (username: string) => {
  const userByUsernameExists = await getUserByUsernameModelFunction(username);
  return userByUsernameExists;
}

export {
  validateEmailHelper,
  checkUserByEmailExistsHelper,
  checkUserByUsernameExistsHelper,
}