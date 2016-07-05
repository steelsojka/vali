import forOwn from './forOwn';

export default function values(obj: Object): any[] {
  const result = [];

  forOwn(obj, value => result.push(value));

  return result;
}
