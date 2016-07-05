import Condition from '../Condition';

export default class AnyRequiredCondition extends Condition {
  validate(value: any): boolean {
    return value != null;
  }
}
