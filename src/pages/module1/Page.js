import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import { Components } from 'eccom-framework';
import AuthConfig from '@/components/pages/module/AuthConfig';

import styles from './index.less';

const {
  Layouts: { withBasicLayout },
} = Components;

@withBasicLayout({
  pageName: 'Template',
  narrow: false,
  authConfig: {
    ...AuthConfig,
  },
})
class Template extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/index">Welcome</Link>
        <Link to="/module1/page2/template3">HideInMenu</Link>
      </div>
    );
  }
}

export default Template;
