import React from 'react';
import { Button, message, notification } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import { withCookies, Cookies, useCookies } from 'react-cookie';
import defaultSettings from '../config/defaultSettings';

/**
 * 初始化环境
 */
const cookies = new Cookies();

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
