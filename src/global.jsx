import React from 'react';
import { Button, message, notification } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import defaultSettings from '../config/defaultSettings';

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
