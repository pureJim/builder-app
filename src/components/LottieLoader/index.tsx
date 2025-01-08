import type { AnimationItem } from 'lottie-web';
import lottie from 'lottie-web';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';

// 渲染类型
type RendererType = 'svg' | 'canvas' | 'html';

// 常用属性
interface ILoaderProps {
  /** 是否循环播放 */
  loop?: boolean;
  /** 渲染动画的类型 */
  renderer?: RendererType;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 动画渲染数据，与path互斥 */
  animationData?: unknown;
  /** JSON文件路径，与animationData互斥 */
  path?: string;
}

const LottieLoader = forwardRef<unknown, ILoaderProps>((props, ref) => {
  const { loop = true, renderer = 'svg', path = '', animationData, autoplay = true } = props;

  // 设置动画渲染的容器
  const containerElement = useRef<HTMLDivElement | null>(null);
  // 对外暴露的ref对象
  const lottieAnimation = useRef<AnimationItem | null>(null);

  // 方便控制当前动画的播放与暂停
  useImperativeHandle(ref, () => ({
    getInstance: () => lottieAnimation.current,
    play: () => {
      lottieAnimation.current?.play();
    },
    pause: () => {
      lottieAnimation.current?.pause();
    },
    stop: () => {
      lottieAnimation.current?.stop();
    },
  }));

  // 缓存动画的相关配置
  const animationOptions = useMemo(() => {
    const options: ILoaderProps = {
      loop,
      renderer,
      autoplay,
    };

    // 优先取animationData
    if (animationData) {
      options.animationData = animationData;
    } else {
      options.path = path;
    }

    return options;
  }, [loop, renderer, path, animationData, autoplay]);

  useEffect(() => {
    if (!containerElement.current) {
      return;
    }

    // 渲染动画
    const lottieAnimationItem: AnimationItem = lottie.loadAnimation({
      container: containerElement.current,
      ...animationOptions,
    });

    // 将渲染后的动画示例对象赋值给lottieAnimation.current，对外暴露
    lottieAnimation.current = lottieAnimationItem;

    // eslint-disable-next-line consistent-return
    return () => {
      lottieAnimation.current = null;
      lottieAnimationItem.destroy();
    };
  }, [animationOptions]);

  return <div ref={containerElement} style={{ width: '100%', height: '100%' }} />;
});

LottieLoader.displayName = 'LottieLoader';

export default LottieLoader;
