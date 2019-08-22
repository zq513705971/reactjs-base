import module1Routes from '@/pages/module1/routes.config';
import module2Routes from '@/pages/module2/routes.config';

let routes = [
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
      ...module1Routes,
      ...module2Routes
    ],
  },
  {
    component: './404',
  },
];

export default routes;
