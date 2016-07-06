interface Condition {
  validate(value: any): boolean;
  sanitize(value: any): any;
}

export default Condition;
