import { AnyType } from './Any';
import {
  StringRequiredCondition 
} from '../conditions/string';

export class StringType extends AnyType {
  required(): StringType {
    this.addCondition('required', new StringRequiredCondition());

    return this;
  }
}
