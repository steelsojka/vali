import { AnyType } from './Any';
import ValidationResult from '../ValidationResult';
import {
  ObjectRequiredCondition
} from '../conditions/object';

export class ObjectType extends AnyType {
  protected schema: Object;

  constructor(schema: Object) {
    super();

    this.schema = schema;
  }

  validate(value: Object): ValidationResult {
    const result = new ValidationResult();

    return result;
  }

  required(): ObjectType {
    this.addCondition('required', new ObjectRequiredCondition());

    return this;
  }
}
