import Any from './Any';
import ValidationResult from '../ValidationResult';

export class ObjectType extends Any {
  static typeName: string = 'object';

  private schema: Object;

  constructor(schema: Object) {
    super();

    this.schema = schema;
  }

  validate(value: Object): ValidationResult {
    const result = new ValidationResult();

    return result;
  }
}
