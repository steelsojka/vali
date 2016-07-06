import { Type, StringType, AnyType, ObjectType } from './types';

export default class Vali {
  string(): StringType {
    return new StringType();
  }

  any(): AnyType {
    return new AnyType();
  }

  object(schema: Object): ObjectType {
    return new ObjectType(schema);
  }
}
