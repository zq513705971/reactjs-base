import React, { useEffect } from 'react';
import { Divider, ConfigProvider } from 'antd';
import { connect } from 'dva';
import memoizeOne from 'memoize-one';
import pathToRegexp from 'path-to-regexp';
import router from 'umi/router';
import isEqual from 'lodash/isEqual';
import DocumentTitle from 'react-document-title';
import { getPageTitle } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import { Components, Utils } from 'eccom-framework';
import routesConfig from '../../config/routes.config';
import defaultSettings from '../../config/defaultSettings';

import styles from './BasicLayout.less';

const {
  utils: { matchParamsPath, getCurrentRoutePaths },
} = Utils;
const { Layouts } = Components;
const { Container, Header, Body, Footer } = Layouts;

const BasicLayout = props => {
  const {
    dispatch,
    children,
    location: { pathname },
    route: { routes, path },
  } = props;

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
      dispatch({
        type: 'user/refreshToken',
      });
      dispatch({
        type: 'settings/getMenuData',
        payload: {
          routes: routesConfig[0].routes,
          path,
          pathname,
          formatMessage,
          title: defaultSettings.title,
        },
      });
    }
  }, []);
  return <React.Fragment>{children}</React.Fragment>;
};

export default connect(({ settings, user }) => ({
  settings,
  user,
}))(BasicLayout);
