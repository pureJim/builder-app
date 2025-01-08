import logout from '@/service/auth/auth';
import { useUserStore } from '@/store/system';

import { Container } from './style';

const userStoreSelector = (state: SystemStore.IUserState & SystemStore.IUserActions) => ({
  user: state.user,
  setUser: state.setUser,
  reset: state.reset,
});

const TopBar = () => {
  const { reset } = useUserStore(userStoreSelector);

  const handleLogout = () => {
    reset();
    logout();
  };

  /** 获取名称 */
  const FullName = () => {
    const name = 'DEV';
    if (name) {
      return { name, subName: name.substring(0, 1).toUpperCase() };
    }
    return {
      name: '-',
      subName: '-',
    };
  };

  return (
    <Container>
      <div onClick={handleLogout}>{FullName().subName}</div>
    </Container>
  );
};

export default TopBar;
