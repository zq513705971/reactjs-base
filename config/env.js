module.exports = {
  // 开发环境
  dev: {
    domainPath: '172.30.8.133', //正式环境替换为eccom.com.cn
    REDIRECT_LOGIN_URL: 'http://172.30.8.133:8001/login',
  },
  // 本地
  local: {
    domainPath: 'localhost', //正式环境替换为eccom.com.cn
    REDIRECT_LOGIN_URL: 'http://localhost:8001/login',
  },
  // 生产
  pro: {
    domainPath: 'eccom.com.cn', //正式环境替换为eccom.com.cn
    REDIRECT_LOGIN_URL: 'http://eccom.com.cn:8001/login',
  },
};
