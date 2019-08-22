import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import webpackPlugin from './plugin.config';
import routesConfig from './routes.config';
const { primaryColor } = defaultSettings;

const { API_ENV } = process.env;

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/common/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: false,
      dll: {
        include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
        exclude: ['@babel/runtime', 'netlify-lambda'],
      },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: false,
  routes: routesConfig,
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    'process.env': {
      API_ENV: API_ENV,
    },
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  proxy: {
    '/api/auth/': {
      target: 'http://172.30.8.12:9010/api/auth/',
      changeOrigin: true,
      pathRewrite: { '^/api/auth': '' },
    },
    '/api/hr/': {
      target: 'http://172.30.8.12:9010/api/hr/',
      changeOrigin: true,
      pathRewrite: { '^/api/hr': '' },
    },
    '/api/qm/': {
      target: 'http://172.30.8.12:9010/api/qm/',
      changeOrigin: true,
      pathRewrite: { '^/api/qm': '' },
    },
  },
};
