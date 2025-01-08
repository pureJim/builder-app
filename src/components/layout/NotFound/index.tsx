import { useIntl } from 'react-intl';

const NotFound: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <h1>404</h1>
      <p>{intl.formatMessage({ id: 'layout.msg.404.title' })}</p>
      <p>{intl.formatMessage({ id: 'layout.msg.404.subTitle' })}</p>
      <button>{intl.formatMessage({ id: 'layout.msg.404.button' })}</button>
    </div>
  );
};

export default NotFound;
