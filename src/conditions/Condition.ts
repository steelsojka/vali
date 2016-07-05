export default class Condition {
  static name: string = '';

  constructor(...args: any[]) {}

  validate(value: any): boolean {
    return true;
  }

  sanitize(value: any): any {
    return true;
  }
}
