import { withCookies, Cookies, useCookies } from 'react-cookie';
import { doLogin, logoutCurrent } from '../services/user';
import { message, notification } from 'antd';
import { routerRedux } from 'dva/router';

const cookies = new Cookies();

export default {
  namespace: 'user',
  state: {
    currentUser: {},
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(doLogin, payload);
      if (response.status == 200) {
        yield put({
          type: 'save',
          payload: {
            token: response.data || '',
          },
        });
        yield put(routerRedux.replace('/index'));
      } else {
        notification.error({
          message: `登录失败`,
          description: `${response.status}:${response.message}`,
        });
      }
    },
    *logoutCurrent(_, { call, put }) {
      const response = yield call(logoutCurrent);
      yield put({
        type: 'save',
        payload: (response && response.data) || {},
      });
      routerRedux.replace('/user/login');
    },
  },

  reducers: {
    save(state, action) {
      const { token = '' } = action.payload;
      cookies.set('TOKEN_KEY', token, {
        path: '/',
      });

      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
};
