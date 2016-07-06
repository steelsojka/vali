import Condition from '../conditions/Condition';
import ValidationResult from '../ValidationResult';
import ValidationState from '../ValidationState';
import forOwn from '../utils/forOwn';

export class Type {
  conditions: Object = {};

  validate(state: ValidationState): ValidationResult {
    const result = new ValidationResult();

    forOwn(this.conditions, condition => {
      let list = 'valid';

      if (condition.validate(state.value, state)) {
        list = 'invalid';
      }

      result[list].push({ condition, state });
    });

    return result;
  }

  protected addCondition(name: string, condition: Condition): void {
    this.conditions[name] = condition;
  }
}
