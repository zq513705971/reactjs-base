import React, { useEffect } from 'react';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import routesConfig from '../../config/routes.config';
import defaultSettings from '../../config/defaultSettings';

import styles from './BasicLayout.less';

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
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default connect(({ settings, user }) => ({
  settings,
  user,
}))(BasicLayout);
