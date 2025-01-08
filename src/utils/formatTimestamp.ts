/** 时间戳格式化时间 */
const formatTimestamp = (timestamp: number, format: string): string => {
  if (!timestamp || !format) return '';
  const date = new Date(timestamp);

  const pad = (num: number, places: number = 2) => num.toString().padStart(places, '0');
  const weekOfYear = (_date: Date): number => {
    const start = new Date(_date.getFullYear(), 0, 0);
    const diff = _date.getTime() - start.getTime() + start.getTimezoneOffset() * 60 * 1000;
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.ceil(diff / oneWeek);
  };

  return format
    .replace('YYYY', date.getFullYear().toString())
    .replace('YY', date.getFullYear().toString().substring(2))
    .replace('MM', pad(date.getMonth() + 1))
    .replace('DD', pad(date.getDate()))
    .replace('hh', pad(date.getHours()))
    .replace('mm', pad(date.getMinutes()))
    .replace('ss', pad(date.getSeconds()))
    .replace('HH', (date.getHours() % 12 || 12).toString())
    .replace('hh24', date.getHours().toString())
    .replace('mm24', date.getMinutes().toString())
    .replace('ss24', date.getSeconds().toString())
    .replace('SSS', pad(date.getMilliseconds(), 3))
    .replace('ISO', date.toISOString())
    .replace('TZ', `GMT${-date.getTimezoneOffset() / 60}`)
    .replace('W', weekOfYear(date).toString());
};

export default formatTimestamp;

// 示例
// isBusinessEmail('example@business.com'); // 应返回 true
// isBusinessEmail('user@gmail.com')        // 应返回 false
// isBusinessEmail('user@163.com')          // 应返回 false
// 含义
// YYYY - 年份
// MM - 月份
// DD - 日
// hh - 小时
// mm - 分钟
// ss - 秒
// HH - 12小时制的小时（01-12）
// AP / ap - 上午/下午标识（大写或小写）
// Weekday - 星期的完整名称
// YY - 年份的后两位
// MMMM - 月份的四位数表示（用于补齐为四位数）
// Wkdy - 星期的简写
// Q - 当前季度
// DDD - 一年中的第几天（三位数表示）
// hh24, mm24, ss24 - 不带前导零的小时、分钟和秒（24小时制）。
// SSS - 显示毫秒。
// ISO - ISO 8601 格式的日期时间。
// TZ - 时区信息。
// W - 一年中的周数。
