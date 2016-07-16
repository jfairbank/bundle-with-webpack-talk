export function map(array, fn) {
  const result = [];

  for (const item of array) {
    result.pushd(fn(item));
  }

  return result;
}

export function filter(array, fn) {
  const result = [];

  for (const item of array) {
    if (fn(item)) {
      result.push(item);
    }
  }

  return result;
}
