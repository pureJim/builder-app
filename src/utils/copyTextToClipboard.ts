/** 复制剪贴版 */
const copyTextToClipboard = (textToCopy: string) => {
  if (!textToCopy || Object.prototype.toString.call(textToCopy) !== '[object String]') return;

  /** 旧的方法 */
  // 创建一个临时的文本域元素
  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  // 选择文本内容并复制到剪贴板
  textArea.select();
  document.execCommand('copy');
  // 清除临时元素
  document.body.removeChild(textArea);

  /** 新的方法 */
  // 创建一个 Blob 对象包含要复制的文本
  const blob = new Blob([textToCopy], { type: 'text/plain' });
  // 使用 Clipboard API 复制文本到剪贴板
  navigator.clipboard
    .write([new ClipboardItem({ 'text/plain': blob })])
    .then(() => null)
    .catch(() => null);
};

export default copyTextToClipboard;
