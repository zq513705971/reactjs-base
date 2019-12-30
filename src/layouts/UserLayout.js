import React, { useEffect } from 'react';

import styles from './UserLayout.less';

export default props => {
  let { children } = props;
  return <div className={styles.container}>
    <div className={styles.form}>
      <div className={styles.header}>华讯移动应用市场</div>
      <div className={styles.body}>
        <div className={styles.logo}></div>
        <div className={styles.main}>
          <div style={{ paddingTop: 10, paddingBottom: 10 }}>登录</div>
          {children}
        </div>
      </div>
      <div className={styles.footer}>© 华讯网络系统有限公司 版权所有</div>
    </div>
  </div>;
};
