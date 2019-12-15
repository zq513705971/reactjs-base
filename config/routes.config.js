let routes = [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/', redirect: '/user/login' },
      {
        path: '/user/login',
        name: 'welcome',
        icon: 'smile',
        component: './Login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    component: './404',
  },
];

export default routes;
