import React, { useEffect } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import { Utils } from 'eccom-framework-web';
import routesConfig from '../../config/routes.config';
import defaultSettings from '../../config/defaultSettings';

import styles from './BasicLayout.less';

const {
  utils: { log },
} = Utils;

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

  log('BasicLayout', props);

  return <React.Fragment>{children}</React.Fragment>;
};

export default connect(({ settings, user }) => ({
  settings,
  user,
}))(BasicLayout);
