import { useIntl } from 'react-intl';
import { LayoutFooter } from './style';

const Footer = () => {
  const intl = useIntl();

  return (
    <LayoutFooter>
      <span aria-label="copyright">{intl.formatMessage({ id: 'layout.copyright' })}</span>
    </LayoutFooter>
  );
};

export default Footer;
