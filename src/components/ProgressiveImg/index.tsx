import classNames from 'classnames';
import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
/** 样式 */
import styles from './style.module.less';

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  ph?: string;
  src: string;
  style?: CSSProperties;
}

/**
 * className 自定义样式名，用于样式扩展
 * style 内联样式
 */
const ProgressiveImg = (props: IProps) => {
  const { ph: placeholder, src, style, className } = props;
  const [imgSrc, setImgSrc] = useState(placeholder || src);
  const loadClass = placeholder && imgSrc === placeholder ? styles.loading : styles.loaded;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      src={imgSrc}
      alt={props?.alt || ''}
      className={classNames(loadClass, { [className as unknown as string]: !!className })}
      style={style}
    />
  );
};
export default ProgressiveImg;
