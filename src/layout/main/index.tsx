import { Outlet } from 'react-router';

import SideBar from '@/components/layout/SideBar';
import TopBar from '@/components/layout/TopBar';
import { usePlatformStore } from '@/store/system';

import {
  Container,
  Content,
  ContentWrapper,
  Layout,
  SideBarPlaceholder,
  SideBarWrapper,
  TopBarPlaceholder,
  TopBarWrapper,
} from './style';

const MainLayout = () => {
  const { collapse, setCollapse, isShowHeader } = usePlatformStore((state) => ({
    collapse: state.collapse,
    setCollapse: state.setCollapse,
    isShowHeader: state.isShowHeader,
  }));

  return (
    <Layout>
      <Container>
        <SideBarPlaceholder $collapse={collapse.toString()} />
        <SideBarWrapper $collapse={collapse.toString()}>
          <SideBar collapse={collapse} setCollapse={setCollapse} />
        </SideBarWrapper>
        <ContentWrapper $collapse={collapse.toString()}>
          {isShowHeader && (
            <>
              <TopBarWrapper $collapse={collapse.toString()}>
                <TopBar />
              </TopBarWrapper>
              <TopBarPlaceholder />
            </>
          )}

          <Content>
            <Outlet />
          </Content>
          {/* <Footer /> */}
        </ContentWrapper>
      </Container>
    </Layout>
  );
};

export default MainLayout;
