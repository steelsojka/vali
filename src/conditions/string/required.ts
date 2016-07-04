import negate from 'lodash/negate';
import overEvery from 'lodash/overEvery';
import eq from 'lodash/fp/eq';

import AnyRequiredCondition from '../any/required';

export default class StringRequiredCondition extends AnyRequiredCondition {
  condition: Function = overEvery(isString, negate(eq('')));
}
