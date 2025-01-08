/** 生成一个包含大小写字母和数字的随机密码 */
const getRandomPassword = (length: number = 16): string => {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  // 保证至少有一个大写字母、一个小写字母和一个数字
  const guaranteedCharacters =
    uppercase.charAt(Math.floor(Math.random() * uppercase.length)) +
    lowercase.charAt(Math.floor(Math.random() * lowercase.length)) +
    numbers.charAt(Math.floor(Math.random() * numbers.length));

  let result = guaranteedCharacters;
  const allCharacters = uppercase + lowercase + numbers;
  const allCharactersLength = allCharacters.length;

  // 随机添加其余字符直到达到所需长度
  for (let i = guaranteedCharacters.length; i < length; i += 1) {
    result += allCharacters.charAt(Math.floor(Math.random() * allCharactersLength));
  }

  // 随机打乱最终字符串
  return result
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');
};

export default getRandomPassword;
