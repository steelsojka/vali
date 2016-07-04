import negate from 'lodash/negate';
import isNil from 'lodash/isNil';

import Condition from '../Condition';

export default class AnyRequiredCondition extends Condition {
  static name: string = 'required';
  validate: Function = negate(isNil);
}
