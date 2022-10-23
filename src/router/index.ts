import express from 'express';

import { userRouter } from '../resources/user/user.routes';

import { clubsRouter } from '../resources/clubs/clubs.routes';


const router = express.Router({ mergeParams: true });

/* GET health check of app */
router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/user', userRouter);

router.use('/clubs', clubsRouter);


export default router;