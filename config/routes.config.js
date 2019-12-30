let routes = [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      {
        path: '/user/login',
        name: 'welcome',
        icon: 'smile',
        component: './Login',
      },
    ],
  },
  {
    path: '/admin',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/admin', redirect: '/admin/index' },
      {
        path: '/admin/index',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        name: 'welcome',
        icon: 'smile',
        component: './Default',
      },
    ],
  },
  {
    component: './404',
  },
];

export default routes;
