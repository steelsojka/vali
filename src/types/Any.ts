import { Type } from './Type';
import {
  AnyRequiredCondition
} from '../conditions/any';

export class AnyType extends Type {
  required(): AnyType {
    this.addCondition('required', new AnyRequiredCondition());

    return this;
  }
}
