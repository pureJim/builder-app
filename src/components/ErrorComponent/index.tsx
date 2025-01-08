import { useRouteError } from 'react-router';

const ErrorComponent = () => {
  const error = useRouteError() as string;

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div style={{ margin: 20 }}>
      <p>糟糕！出错了！</p>
      <article>请查看报错信息查看是否能够解决问题，或者尝试重新加载页面。</article>
      <button onClick={handleReload}>重新加载</button>,
      <a href="/" title="redirect">
        <button>返回首页</button>
      </a>
      <p>以下是错误信息</p>
      <article>{error.toString() || 'Something went wrong!'}</article>
    </div>
  );
};

export default ErrorComponent;
