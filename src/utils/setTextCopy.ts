type SetTextCopyFC = (text: string) => void;

/** 复制内容至剪贴板 */
const setTextCopy: SetTextCopyFC = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(
      () => {
        // clipboard successfully set
        return null;
      },
      () => {
        // clipboard write failed
      },
    )
    .catch(() => {});
};

export default setTextCopy;
