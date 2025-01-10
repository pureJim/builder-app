import { NodeKey, SerializedTextNode, Spread, TextNode } from 'lexical';
import { emojify } from 'node-emoji';

export type SerializedEmojiNode = Spread<
  {
    unifiedID: string;
  },
  SerializedTextNode
>;

export class EmojiNode extends TextNode {
  __unifiedID: string;

  constructor(unifiedID: string, key?: NodeKey) {
    super(unifiedID, key);

    // 保存 emoji 的 unifiedID
    this.__unifiedID = unifiedID.toLowerCase();
  }

  static getType() {
    return 'emoji';
  }

  static clone(node: TextNode): TextNode {
    const cloned = new EmojiNode((node as EmojiNode).__unifiedID, node.__key);
    return cloned;
  }

  createDOM(): HTMLElement {
    const element = document.createElement('span');
    element.className = 'emoji-node';
    element.contentEditable = 'false'; // 设置为不可编辑
    element.innerText = emojify(this.__unifiedID);
    return element;
  }

  updateDOM(): boolean {
    const element = document.createElement('span');
    element.className = 'emoji-node';
    element.contentEditable = 'false'; // 设置为不可编辑
    element.innerText = emojify(this.__unifiedID);
    return true;
  }

  static importJSON(serializedNode: SerializedEmojiNode): EmojiNode {
    // eslint-disable-next-line no-use-before-define
    return $createEmojiNode(serializedNode.unifiedID);
  }

  exportJSON(): SerializedEmojiNode {
    return {
      ...super.exportJSON(),
      unifiedID: this.__unifiedID,
    };
  }
}

export function $createEmojiNode(unifiedID: string): EmojiNode {
  const node = new EmojiNode(unifiedID).setMode('token');
  return node;
}
