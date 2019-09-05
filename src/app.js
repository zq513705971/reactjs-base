import { Utils } from 'eccom-framework-web';

const { utils } = Utils;

export function patchRoutes(routes) {
  utils.log('patchRoutes', routes);
}

// 可在此增加页面访问追踪
export function onRouteChange({ location, routes, action }) {
  utils.log('onRouteChange', location, routes, action);
}
