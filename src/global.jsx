import React from 'react';
import { Button, message, notification } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import { withCookies, Cookies, useCookies } from 'react-cookie';
import { Configs } from 'eccom-framework-web';
import defaultSettings from '../config/defaultSettings';

const {
  Constant: { DOMAIN_PATH_KEY, REDIRECT_LOGIN_URL_KEY },
} = Configs;

/**
 * 初始化环境
 */
const cookies = new Cookies();
const DOMAIN_PATH = defaultSettings[DOMAIN_PATH_KEY];
const REDIRECT_LOGIN_URL = defaultSettings[REDIRECT_LOGIN_URL_KEY];
cookies.set(DOMAIN_PATH_KEY, DOMAIN_PATH, {
  domain: DOMAIN_PATH,
  path: '/',
});
cookies.set(REDIRECT_LOGIN_URL_KEY, REDIRECT_LOGIN_URL, {
  domain: DOMAIN_PATH,
  path: '/',
});

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
