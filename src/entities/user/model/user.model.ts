import Realm, { BSON, ObjectSchema } from "realm";

export class User extends Realm.Object<User> {
  _id!: BSON.ObjectId;
  name!: string;

  static schema: ObjectSchema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      name: {
        type: 'string',
        indexed: 'full-text'
      },
    },
    primaryKey: '_id',
  };
}