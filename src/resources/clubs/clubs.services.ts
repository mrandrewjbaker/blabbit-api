import { Response } from "express";
import { clubCreateModelFunction, clubGetByIdModelFunction, clubsGetAllModelFunction, clubUpdateByIdModelFunction } from "../../models/club"
import { badRequestResponse, successResponse } from "../../utilities/responses";

const clubCreateService = async (name: string, description: string, open: boolean, slugName: string, res: Response) => {
  const clubCreateServiceResult = await clubCreateModelFunction(name, description, open, slugName);
  if (clubCreateServiceResult.id) {
    const successResponseData = {
      id: clubCreateServiceResult.id,
      message: 'Club created successfully'
    }
    return successResponse(res, successResponseData);
  }
  return badRequestResponse(res, "Club could not be created");
}

const clubsGetAllService = async (res: Response) => {
  const clubsGetAllServiceResult = await clubsGetAllModelFunction();
  if (clubsGetAllServiceResult) {
    const clubsGetAllServiceResultArray = clubsGetAllServiceResult.map((club: any) => club.toJSON());
    return successResponse(res, clubsGetAllServiceResultArray);
  }
  return badRequestResponse(res, "No clubs found");
}

const clubGetByIdService = async (id: string, res: Response) => {
  const clubGetByIdServiceResult = await clubGetByIdModelFunction(id);
  if (clubGetByIdServiceResult) {
    return successResponse(res, clubGetByIdServiceResult);
  }
  return badRequestResponse(res, "No club found");
}

const clubUpdateByIdService = async (id: string, name: string, description: string, open: boolean, slugName: string, res: Response) => {
  const clubUpdateServiceResult = await clubUpdateByIdModelFunction(id, name, description, open, slugName);
  if (clubUpdateServiceResult) {
    const successResponseData = {
      id,
      message: 'Club updated successfully'
    }
    return successResponse(res, successResponseData);
  }
  return badRequestResponse(res, "Club could not be updated");
}

export {
  clubCreateService,
  clubsGetAllService,
  clubGetByIdService,
  clubUpdateByIdService
}