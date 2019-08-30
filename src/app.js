export function patchRoutes(routes) {
  console.log('patchRoutes', routes);
}

export function onRouteChange({ location, routes, action }) {
  console.log('onRouteChange', location, routes, action);
}
