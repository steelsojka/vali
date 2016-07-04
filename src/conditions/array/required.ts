import isArray from 'lodash/isArray';

import AnyRequiredCondition from '../any/required';

export default class ArrayRequiredCondition extends AnyRequiredCondition {
  validate: Function = isArray;
}
