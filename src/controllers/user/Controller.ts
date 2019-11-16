import { Request, Response } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import { successHandler } from '../../libs/routes';
import { userModel } from './../../repositories/user/UserModel';

const user = new UserRepository(userModel);
class UserController {

  public async get(req: Request, res: Response) {
    const  { skip = 0, limit = 10 }  = req.query;
    const role = {role: 'trainee'};
    const data1 = await user.find(skip, limit, role);
    const documents = await user.count();
    const data = [{ documents, data1 }];
    res.status(200).send(successHandler('User Data', 200, data));
  }

  public async post(req: Request, res: Response) {
    const data = await user.createUser(req.body);
    res.status(200).send(successHandler('User Created', 200, data));
  }
  
}
export default new UserController();
