const deepCloneMap = <T, K>(originMap: Map<T, K>) => {
  const tempMap = new Map<T, K>();
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of originMap) {
    if (value instanceof Map) {
      tempMap.set(key, deepCloneMap(value as Map<T, K>) as unknown as K);
    } else {
      tempMap.set(key, value);
    }
  }
  return tempMap;
};

export default deepCloneMap;
