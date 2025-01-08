function deepCopy<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Array) {
    const copy: T[] = [];
    for (let i = 0; i < obj.length; i += 1) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      copy[i] = deepCopy(obj[i]);
    }
    return copy as unknown as T;
  }

  const copy = {} as T;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

export default deepCopy;
