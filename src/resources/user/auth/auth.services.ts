import { Response } from "express";
import { loginUserAuthModelFunction } from "../../../models/user";
import { registerUserAuthModelFunction } from "../../../models/user";
import { badRequestResponse, successResponse } from "../../../utilities/responses";
import { authValidateUserEmailHelper, authCheckUserExistsByEmailHelper, authCheckUserExistsByUsernameHelper } from "./auth.helpers";



const authRegisterService = async (email: string, username: string, password: string, res: Response) => {
  const emailValid = await authValidateUserEmailHelper(email);
  if (!emailValid) {
    return badRequestResponse(res, "Email is not valid");
  }

  const userByEmailExists = await authCheckUserExistsByEmailHelper(email);
  if (userByEmailExists) {
    return badRequestResponse(res, "Email already registered");
  }

  const userByUsernameExists = await authCheckUserExistsByUsernameHelper(username);
  if (userByUsernameExists) {
    return badRequestResponse(res, "Username already registered");
  }

  const registerUserAuthResult = await registerUserAuthModelFunction(email, username, password);
  if (registerUserAuthResult.id) {
    return successResponse(res, "User registered successfully");
  }
}

const authLoginService = async (username: string, password: string, res: Response) => {
  const loginUserResult = await loginUserAuthModelFunction(username, password);
  if (loginUserResult) {
    return successResponse(res, loginUserResult);
  }
  return badRequestResponse(res, "Invalid username or password");
}

export {
  authRegisterService,
  authLoginService
}
