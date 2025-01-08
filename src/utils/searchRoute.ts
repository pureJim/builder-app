import { TRouteObject } from '../router';

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
const searchRoute = (path: string, routes: TRouteObject[] = []): TRouteObject => {
  let result: TRouteObject = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const item of routes) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) {
        result = res;
      }
    }
  }
  return result;
};

export default searchRoute;
