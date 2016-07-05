import Condition from './conditions/Condition';
import ValidationState from './ValidationState';

interface ConditionResult {
  condition: Condition;
  state: ValidationState;
}

export default class ValidationResult {
  invalid: ConditionResult[] = [];
  valid: ConditionResult[] = [];
}
