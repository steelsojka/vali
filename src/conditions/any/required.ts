import Condition from '../Condition';

export class AnyRequiredCondition extends Condition {
  static conditionName: string = 'required';

  validate(value: any): boolean {
    return value != null;
  }
}
