import Type from './types/Type';

export default class Vali {
  static register(TypeCtor: typeof Type): void {
    const { name: string } = TypeCtor;

    this.prototype[name] = function(...args: any[]): Type {
      return new TypeCtor(...args);
    };
  }
}
