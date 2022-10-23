import express from 'express';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/env/.env' });

import v1Router from './router';

console.log(process.env.JWT_SECRET_0);

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));
// api.use(cookieParser());
api.use(express.static(path.join(__dirname, 'public')));

api.use('/v1', v1Router);

api.use((req, res, next) => {
  next(res.sendStatus(404));
});

export default api;

module.exports = api;