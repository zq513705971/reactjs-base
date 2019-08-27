module.exports = [
  {
    path: '/module2',
    name: 'module2',
    icon: 'home',
    routes: [
      {
        path: '/module2/page1',
        name: 'page1',
        icon: 'tags',
        routes: [
          {
            path: '/module2/page1/template1',
            name: 'template1',
            icon: 'tag',
            component: './module2/page1/Template1',
          },
          {
            path: '/module2/page1/template2',
            name: 'template2',
            icon: 'tag',
            component: './module2/page1/Template2',
          },
        ],
      },
      {
        path: '/module2/page2',
        name: 'page2',
        icon: 'tags',
        routes: [
          {
            path: '/module2/page2/template1',
            name: 'template1',
            icon: 'tag',
            component: './module2/page2/Template1',
          },
          {
            path: '/module2/page2/template2',
            name: 'template2',
            icon: 'tag',
            component: './module2/page2/Template2',
          },
          {
            name: 'template3',
            redirect: '/module1/page0',
            // target: '_blank'
          },
        ],
      },
    ],
  },
];
