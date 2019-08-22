module.exports = [{
    path: '/module1',
    name: 'module1',
    icon: 'home',
    routes: [{
        path: '/module1/page0',
        name: 'page0',
        icon: 'tags',
        component: './module1/Page'
    }, {
        path: '/module1/page1',
        name: 'page1',
        icon: 'tags',
        routes: [
            {
                path: '/module1/page1/template1',
                name: 'template1',
                icon: 'tag',
                component: './module1/page1/Template1',
            },
            {
                path: '/module1/page1/template2',
                name: 'template2',
                icon: 'tag',
                component: './module1/page1/Template2',
            }
        ]
    }, {
        path: '/module1/page2',
        name: 'page2',
        icon: 'tags',
        routes: [
            {
                path: '/module1/page2/template1',
                name: 'template1',
                icon: 'tag',
                component: './module1/page2/Template1',
                divider: true
            },
            {
                path: '/module1/page2/template2',
                name: 'template2',
                icon: 'tag',
                component: './module1/page2/Template2',
                target: '_blank'
            },
            {
                path: '/module1/page2/template3',
                name: 'template3',
                icon: 'tag',
                component: './module1/page2/Template3',
            },
            {
                path: '/module2/page1/template1',
                name: 'template21',
                icon: 'tag',
                component: './module2/page1/Template1',
            },
            {
                path: '/module1/page2/template4',
                name: 'template4',
                icon: 'tag',
                hideInMenu: true,
                component: './module1/page2/Template4',
            }
        ]
    }]
}];
