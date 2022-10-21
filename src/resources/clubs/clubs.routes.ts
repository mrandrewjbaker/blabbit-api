import express from 'express';
import { clubCreateController, clubGetByIdController, clubsGetAllController, clubUpdateByIdController } from './clubs.controllers';

const clubsRouter = express.Router({ mergeParams: true });

clubsRouter.post('/', clubCreateController);

clubsRouter.get('/', clubsGetAllController);

clubsRouter.get('/:id', clubGetByIdController);

clubsRouter.put('/:id', clubUpdateByIdController);


export {
  clubsRouter
}