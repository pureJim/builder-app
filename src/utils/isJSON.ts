/**
 * 判断一个字符串是否是JSON格式，返回Boolean值
 * @param str 判断的字符串
 */
export default (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
