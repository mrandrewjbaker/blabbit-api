import { Request, Response } from "express";
import { clubCreateService, clubGetByIdService, clubsGetAllService, clubUpdateByIdService } from "./clubs.services";

const clubCreateController = async (req: Request, res: Response) => {
  const { name, description, open, slugName } = req.body;
  await clubCreateService(name, description, open, slugName, res);
}

const clubsGetAllController = async (req: Request, res: Response) => {
  await clubsGetAllService(res);
}

const clubGetByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await clubGetByIdService(id, res);
}

const clubUpdateByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, open, slugName } = req.body;
  await clubUpdateByIdService(id, name, description, open, slugName, res);
}



export {
  clubCreateController,
  clubsGetAllController,
  clubGetByIdController,
  clubUpdateByIdController,
  
}