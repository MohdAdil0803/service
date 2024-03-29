import * as mongoose from 'mongoose';
import VersionRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';

export default class UserRepository extends VersionRepository<
  IUserModel,
  mongoose.Model<IUserModel>
> {
  public createUsers(data: any) {
    return this.createUser(data);
  }
  public findData(data) {
    return this.findOne(data);
  }
  public countData() {
    return super.count();
  }
  public find(value1, value2, role) {
    return super.findUser(value1, value2, role);
  }
}
