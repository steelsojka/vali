import AnyRequiredCondition from '../any/required';

export default class StringRequiredCondition extends AnyRequiredCondition {
  validate(value: any): boolean {
    return typeof value === 'string' && value !== '';
  }
}
