import classNames from 'classnames';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

import openImg from '@/assets/menu_open.svg';
import closeImg from '@/assets/menu_stow.svg';
import { MenuWrapper, SideBarActionWrapper, SideBarContainer, SidebarLogo, SideBarLogoWrapper } from './style';

const SideBar: React.FC<Layout.ISideProps> = (props) => {
  const { collapse, setCollapse } = props;

  const { pathname } = useLocation();

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    const paths = pathname.split('/').filter((item) => !!item);
    if (paths.length > 0) {
      // do something
    }
  }, [pathname]);

  return (
    <SideBarContainer>
      <SideBarLogoWrapper>
        <SidebarLogo
          className={classNames({
            collapsed: collapse,
          })}
        >
          <span>Jim</span>
          <span>Stack</span>
        </SidebarLogo>
      </SideBarLogoWrapper>
      <MenuWrapper>menu</MenuWrapper>
      <SideBarActionWrapper>
        <button aria-label="collapse" onClick={handleCollapse}>
          <img src={collapse ? openImg : closeImg} alt="collapse" />
        </button>
      </SideBarActionWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
