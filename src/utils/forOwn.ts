export default function forOwn(obj: Object, fn: Function) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn(obj[key], key, obj);
    }
  }
};
