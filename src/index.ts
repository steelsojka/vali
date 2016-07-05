import Vali from './Vali';
import forOwn from './utils/forOwn';
import values from './utils/values';
import * as anyConditions from './conditions/any';
import * as stringConditions from './conditions/string';

import { ObjectType, AnyType, StringType } from './types';

AnyType.registerAll(values(anyConditions));
StringType.registerAll(values(stringConditions));

const vali = new Vali();

export default vali;
export { Vali };

vali.registerAll([
  ObjectType,
  AnyType,
  StringType
]);
