import { Navigate, RouteObject } from 'react-router';

import { lazy } from 'react';
// eslint-disable-next-line import/no-cycle

import NoAuth from '@/components/layout/NoAuth';
import MainLayout from '@/layout/main';

import LazyLoad from '../lazy-load';

interface MetaProps {
  title?: string;
  auth: boolean;
  role?: string[];
  exact?: boolean;
  /** 当前路径 */
  key?: string;
  hideInMenu?: boolean;
}

type TRouteObject = RouteObject & {
  children?: TRouteObject[];
  meta?: MetaProps;
};

const route: TRouteObject[] = [
  {
    path: '',
    element: <MainLayout />,
    meta: {
      title: '临研助手 | Pure Global',
      auth: false,
      key: 'main-layout',
    },
    children: [
      // 首页
      {
        index: true,
        path: 'dashboard',
        element: LazyLoad(lazy(() => import('@/pages/dashboard'))),
        meta: {
          auth: false,
          title: 'Dashboard',
          key: '/dashboard',
        },
      },
      {
        path: '/',
        element: <Navigate to="/dashboard" />,
      },
    ] as TRouteObject[],
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
    path: '',
    element: <Navigate to="/dashboard" />,
  },
];

export default route;
