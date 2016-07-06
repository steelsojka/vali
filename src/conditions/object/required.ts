import { AnyRequiredCondition } from '../any/required';

export class ObjectRequiredCondition extends AnyRequiredCondition {
  validate(value: any): boolean {
    return typeof value === 'object';
  }
}
