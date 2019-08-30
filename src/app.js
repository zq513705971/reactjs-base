export function patchRoutes(routes) {
  console.log('patchRoutes', routes);
}

// 可在此增加页面访问追踪
export function onRouteChange({ location, routes, action }) {
  console.log('onRouteChange', location, routes, action);
}
