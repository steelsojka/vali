import Condition from '../conditions/Condition';
import ValidationResult from '../ValidationResult';
import ValidationState from '../ValidationState';
import forOwn from '../utils/forOwn';
import Vali from '../Vali';

interface TypeConfig {
  name: string;
}

export default class Type {
  static name: string = '';
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

  static register<T extends Condition>(ConditionCtor: {new(): T, conditionName: string}): void {
    const { conditionName } = ConditionCtor;

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
export { TypeConfig };
