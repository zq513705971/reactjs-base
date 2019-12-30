import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';

import styles from './index.less';

class Template extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.welcome}>AllApp</div>
            </div>
        );
    }
}

export default Template;
