// import authing from '@/authing';
// import type { IUserInfo } from '@authing/web/dist/typings/src/global';
import { createContext, useMemo } from 'react';

import type { ReactNode } from 'react';

interface Injected {
  isAdmin: boolean;
}
export const IFUContext = createContext<Injected>({
  isAdmin: false,
});

interface Props {
  children: ReactNode;
}

export function IFUContextProvider({ children }: Props) {
  // const [isAdmin, setIsAdmin] = useState(false);
  // /** 获取当前用户是否有IFU配置权限 */
  // useEffect(() => {
  //   authing.getUserInfo().then((res) => {
  //     const rst = res as IUserInfo;
  //     if (rst.externalId === 'ifu-admin') {
  //       setIsAdmin(true);
  //     }
  //   });
  // }, []);

  const contextValue = useMemo(
    () => ({
      isAdmin: true,
    }),
    [],
  );

  return <IFUContext.Provider value={contextValue}>{children}</IFUContext.Provider>;
}
