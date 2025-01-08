import { createBrowserRouter, Navigate, RouteObject } from 'react-router';

import NoAuth from '@/components/layout/NoAuth';
import NotFound from '@/components/layout/NotFound';

import mainRoutes from './modules';

export interface MetaProps {
  title?: string;
  auth: boolean;
  role?: string[];
  exact?: boolean;
  /** 当前路径 */
  key?: string;
  hideInMenu?: boolean;
}

export type TRouteObject = RouteObject & {
  children?: TRouteObject[];
  meta?: MetaProps;
};

// 动态引入 main layout 路由, 会导致 tree shaking 失效
// const mainRouters = require.context('./modules/main', false, /\.tsx$/);
// export const mainRouterArray: TRouteObject[] = [];
// mainRouters.keys().forEach((item) => {
//   mainRouterArray.push(...mainRouters(item).default);
// });

export const rootRoutes = [
  ...mainRoutes,
  {
    path: '/401',
    element: <NoAuth type="401" />,
    meta: {
      title: '401',
      auth: false,
      key: '/401',
    },
  },
  {
    path: '/403',
    element: <NoAuth type="403" />,
    meta: {
      title: '403',
      auth: false,
      key: '/403',
    },
  },
  {
    path: '/404',
    element: <NotFound />,
    meta: {
      title: '404',
      auth: false,
      key: '/404',
    },
  },
  {
    path: '',
    element: <Navigate to="/404" />,
    meta: {
      title: '404',
      auth: false,
      key: 'redirect-404',
    },
  },
] as unknown as TRouteObject[];

const Router = createBrowserRouter(rootRoutes);

export default Router;
