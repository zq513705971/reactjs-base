import { withCookies, Cookies, useCookies } from 'react-cookie';
import { accountLogin, queryCurrent, logoutCurrent, refreshToken } from '../services/user';
import { message, notification } from 'antd';
import { routerRedux } from 'dva/router';

const cookies = new Cookies();

export default {
  namespace: 'settings',
  state: {},

  effects: {},

  reducers: {},
};
