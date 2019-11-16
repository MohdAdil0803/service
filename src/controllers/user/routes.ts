import * as express from 'express';
import user from './Controller';

export const userRouter = express.Router();
userRouter
  .get('/', user.get)
  .post('/', user.post)
