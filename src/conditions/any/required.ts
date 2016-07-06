import Condition from '../Condition';

export class AnyRequiredCondition implements Condition {
  validate(value: any): boolean {
    return value != null;
  }

  sanitize(value: any): any {
    return value;
  }
}
