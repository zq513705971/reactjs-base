import React from 'react';
import { Button, message, notification } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import { withCookies, Cookies, useCookies } from 'react-cookie';
import { Configs } from 'eccom-framework';
import defaultSettings from '../config/defaultSettings';

const {
  Constant: { DOMAIN_PATH_KEY, REDIRECT_LOGIN_URL_KEY },
} = Configs;

/**
 * 初始化环境
 */
const cookies = new Cookies();
cookies.set(DOMAIN_PATH_KEY, defaultSettings[DOMAIN_PATH_KEY]);
cookies.set(REDIRECT_LOGIN_URL_KEY, defaultSettings[REDIRECT_LOGIN_URL_KEY]);

if ('serviceWorker' in navigator) {
  // eslint-disable-next-line compat/compat
  navigator.serviceWorker.ready
    .then(registration => {
      registration.unregister();
      return true;
    })
    .catch(() => {
      console.log('serviceWorker unregister error');
    });
}
