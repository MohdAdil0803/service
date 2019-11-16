import * as mongoose from 'mongoose';

export default class VersionRepository<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
  private model: M;
  constructor(model) {
    this.model = model;
  }
  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  public createUser(data: any): Promise<D> {
      console.log("test,")
    const id = this.generateObjectId();
    return this.model.create({ ...data, _id: id, originalId: id });
  }
  public count() {
    return this.model.countDocuments();
  }
  public findOne(query) {
    return this.model.findOne(query);
  }
  public findUser(value1, value2, role) {
    return this.model.find(
      role,
      undefined,
      { skip: +value1, limit: +value2 },
      err => {
        console.log('error');
      }
    );
  }
}
