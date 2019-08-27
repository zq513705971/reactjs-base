import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { Components } from 'eccom-framework';
import AuthConfig from '@/components/pages/module/AuthConfig';

import styles from './index.less';

const {
  Layouts: { withBasicLayout, withBlankLayout },
} = Components;

@withBlankLayout({
  pageName: 'Welcome',
})
class Template extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.welcome}>Welcome</div>
        <Link className={styles.link} to="/module1/page0">
          Sample Pages
        </Link>
      </div>
    );
  }
}

export default Template;
