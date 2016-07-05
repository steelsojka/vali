import { AnyRequiredCondition } from '../any/required';

export class ArrayRequiredCondition extends AnyRequiredCondition {
  validate(value: any): boolean {
    return Array.isArray(value);
  }
}
