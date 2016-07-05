import forOwn from './forOwn';

export default function assign(dest: Object, ...sources: Object[]) {
  sources.forEach(source => {
    forOwn(source, (value, key) => {
      dest[key] = value;
    });
  });

  return dest;
}
