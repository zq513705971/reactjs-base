import { withCookies, Cookies, useCookies } from 'react-cookie';
import { doLogin, fetchCurrent, logoutCurrent } from '../services/user';
import { message, notification } from 'antd';
import { routerRedux } from 'dva/router';

const cookies = new Cookies();

export default {
  namespace: 'user',
  state: {
    currentUser: {}
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(doLogin, payload);
      if (response.code == 200) {
        yield put({
          type: 'save',
          payload: response.data || {},
        });
        yield put(routerRedux.replace('/admin/index'));
      } else {
        notification.error({
          message: `登录失败`,
          description: `${response.code}:${response.msg}`,
        });
      }
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(fetchCurrent);

      if (response.code == 200) {
        yield put({
          type: 'current',
          payload: response.data || {},
        });
        yield put(routerRedux.replace('/admin/index'));
      } else {
        notification.error({
          message: `登录失效！`,
          description: `当前用户登录失效！`,
        });
        yield put(routerRedux.replace('/user/login'));
      }
    },
    *logoutCurrent(_, { call, put }) {
      const response = yield call(logoutCurrent);
      yield put({
        type: 'logout'
      });
      yield put(routerRedux.replace('/user/login'));
    },
  },

  reducers: {
    save(state, action) {
      console.log("action", action.payload);

      const { token, user } = action.payload;
      cookies.set('TOKEN_KEY', token, {
        path: '/',
      });
      return {
        ...state,
        currentUser: user
      };
    },
    current(state, action) {
      return {
        ...state,
        currentUser: action.payload
      };
    },
    logout(state, action) {
      return {
        ...state,
        currentUser: undefined
      };
    }
  },
};
