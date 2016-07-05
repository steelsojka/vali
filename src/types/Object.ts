import Any from './Any';
import ValidationResult from '../ValidationResult';

export default class ObjectType extends Any {
  private schema: Object;

  constructor(schema: Object) {
    super();

    this.schema = schema;
  }

  validate(value: Object): ValidationResult {
    const result = new ValidationResult();
  }
}
