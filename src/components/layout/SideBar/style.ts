import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
`;

export const SideBarLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 84px;
`;

export const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 67px;
  line-height: 32px;
  font-size: 24px;
  font-weight: 500;
  color: #fff;

  &.collapsed {
    flex-direction: column;
    font-size: 15px;
    line-height: 23px;
  }
`;

export const MenuWrapper = styled.div`
  flex: 1;
  user-select: none;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: opacity;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5e6eb;
    border-radius: 100px;
  }
`;

export const SideBarActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;

  svg {
    path {
      color: #fff;
    }
  }
`;
