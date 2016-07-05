import Type from './types/Type';

export default class Vali {
  register(TypeCtor: typeof Type): void {
    const { typeName: string } = TypeCtor;

    this[typeName] = function(...args: any[]): Type {
      return new TypeCtor(...args);
    };
  }

  registerAll(types: typeof Type[]): void {
    types.forEach(_type => this.register(_type));
  }
}
