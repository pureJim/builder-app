declare namespace SystemStore {
  // lang
  type TLang = 'zh-CN' | 'en-US';
  interface IClear {
    reset: () => void;
  }
  interface IBreadcrumb {
    /** 唯一值 */
    key: string;
    /** 标题 */
    title: string;
    /** 路由路径 */
    routePath: string;
    /** 每一个路由前的 icon */
    icon?: React.ReactNode | JSX.Element;
  }

  interface IStepState {
    current: number;
    stepList: string[];
  }

  interface IPlatformState {
    lang: TLang;
    collapse: boolean;
    breadcrumbList: IBreadcrumb[];
    isShowHeader: boolean;
    stepState: IStepState;
  }

  interface IPlatformActions extends IClear {
    setLang: (lang: TLang) => void;
    setCollapse: (collapse: boolean) => void;
    setBreadcrumb: (breadcrumbList: IBreadcrumb[]) => void;
    setIsShowHeader: (isShowHeader: boolean) => void;
    setStepState: (stepState: IStepState) => void;
  }

  // user
  type TUserInfo = {
    company?: string;
    phone?: string;
  };
  type TUser = TUserInfo | undefined;
  type TAuth = Record<
    string,
    {
      activate: boolean;
      type?: string;
      limit: number;
      remaining: number;
    }
  >;
  interface IUserState {
    user: TUser | undefined;
    token: string | undefined;
    isLogin: boolean;
    auth: TAuth;
  }
  interface IUserActions extends IClear {
    setToken: (token: string) => void;
    setIsLogin: (flag: boolean) => void;
    setUser: (user: TUser | undefined) => void;
    setAuth: (auth: TAuth) => void;
  }
}
