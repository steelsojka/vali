export default class ValidationState {
  root: Object;
  path: string[] = [];
  value: any;
  abortEarly: boolean = false;

  constructor(state: Object = {}) {
    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        this[key] = state;
      }
    }
  }

  clone(): ValidationState {
    const result = new ValidationState(this);

    result.path = [...this.path];

    return result;
  }
}
