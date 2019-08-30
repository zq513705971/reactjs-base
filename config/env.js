module.exports = {
  // 开发环境
  dev: {
    DOMAIN_PATH: '172.30.8.133', //正式环境替换为eccom.com.cn
    REDIRECT_LOGIN_URL: 'http://172.30.8.133:8001/login',
  },
  // 本地
  local: {
    DOMAIN_PATH: 'localhost', //正式环境替换为eccom.com.cn
    REDIRECT_LOGIN_URL: 'http://localhost:8001/login',
  },
  // 生产
  pro: {
    DOMAIN_PATH: 'eccom.com.cn', //正式环境替换为eccom.com.cn
    REDIRECT_LOGIN_URL: 'http://eccom.com.cn:8001/login',
  },
};
