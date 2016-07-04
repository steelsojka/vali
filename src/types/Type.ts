import Condition from '../conditions/Condition';

export default class Type {
  conditions: Object = {};

  static register(ConditionCtor: Condition): void {
    const { name: string } = ConditionCtor;

    if (!name) {
      throw new Error('Name must be given when registering a condition');
    }

    this.prototype[name] = function(...args: any[]): Type {
      this.conditions[name] = new ConditionCtor(...args);

      return this;
    };
  }
}
