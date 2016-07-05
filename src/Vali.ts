import { Type, TypeConfig } from './types/Type';

export default class Vali {
  register<T extends Type>(TypeCtor: {new(): T, config: TypeConfig}): void {
    const { name } = TypeCtor.config;

    this[name] = function(...args: any[]): Type {
      return new TypeCtor(...args);
    };
  }

  registerAll(types: typeof Type[]): void {
    types.forEach(_type => this.register(_type));
  }
}
