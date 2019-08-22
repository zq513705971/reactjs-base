import env from './env';

const configs = env[process.env.API_ENV || 'local'];

export default {
  title: '华讯网络 - 模块',

  ...configs,
};
