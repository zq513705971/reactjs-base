const env = process.env.API_ENV || 'local';
let configs = undefined;
switch (env) {
  case 'dev':
    configs = require('./env/dev');
    break;
  case 'local':
    configs = require('./env/local');
    break;
  case 'pro':
    configs = require('./env/pro');
    break;
}

export default {
  title: '华讯网络 - 模块',

  ...configs,
};
