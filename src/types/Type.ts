import Condition from '../conditions/Condition';
import ValidationResult from '../ValidationResult';
import ValidationState from '../ValidationState';
import forOwn from '../utils/forOwn';

export default class Type {
  static typeName: string;

  conditions: Object = {};

  constructor(...args: any[]) {}

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

  static register(ConditionCtor: typeof Condition): void {
    const { conditionName: string } = ConditionCtor;

    if (!conditionName) {
      throw new Error('Name must be given when registering a condition');
    }

    this.prototype[conditionName] = function(...args: any[]): Type {
      this.conditions[conditionName] = new ConditionCtor(...args);

      return this;
    };
  }

  static registerAll(conditions: typeof Condition[]): void {
    conditions.forEach(condition => this.register(condition));
  }
}

export { Type };
