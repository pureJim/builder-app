/**
 * 将非空字符串转换为数字，如果为空或非数字字符串，则返回默认值
 * @param str 要转换的字符串
 * @param defaultValue 非数字或空字符串时的默认值
 * @returns 转换后的数字或默认值
 */
export default (str: string | undefined | null, defaultValue: number = 0): number => {
  if (str && str.trim() !== '') {
    const parsedNumber = Number.parseFloat(str);
    if (!Number.isNaN(parsedNumber)) {
      return parsedNumber;
    }
  }
  return defaultValue;
};
