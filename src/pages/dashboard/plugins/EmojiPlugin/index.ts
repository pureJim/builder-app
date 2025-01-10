import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { TextNode } from 'lexical';
import { useEffect } from 'react';
import { $createEmojiNode, EmojiNode } from './EmojiNode';

// 查找文本中的 emoji 短码
const find = (text: string) => {
  const emojiMatch = /(:[a-zA-Z0-9_+-]+:)/.exec(text); // 匹配 :emoji_name: 的格式
  if (emojiMatch) {
    return {
      emoji: emojiMatch[0],
      index: emojiMatch.index || 0,
    }; // 返回第一个匹配的 emoji 短码
  }
  return null;
};

const $textNodeTransform = (node: TextNode): void => {
  // 防止重复转换
  if (!node.isSimpleText() || node.hasFormat('code') || node.getParent()?.getType() === 'emoji') {
    return;
  }

  const text = node.getTextContent();
  const emojiShortcode = find(text);

  if (!emojiShortcode) {
    return;
  }

  let targetNode: TextNode;
  const startOffset = emojiShortcode.index;
  const endOffset = startOffset + emojiShortcode.emoji.length;

  if (startOffset === 0) {
    [targetNode] = node.splitText(endOffset);
  } else {
    [, targetNode] = node.splitText(startOffset, endOffset);
  }

  const emojiNode = $createEmojiNode(emojiShortcode.emoji);
  targetNode.replace(emojiNode);

  // 让光标移到 emoji 节点后方
  emojiNode.selectNext();
};

const EmojiPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNodes([EmojiNode])) {
      throw new Error('EmojiPlugin: EmojiNode is not registered');
    }

    return editor.registerNodeTransform(TextNode, $textNodeTransform);
  }, [editor]);

  return null;
};

export default EmojiPlugin;
