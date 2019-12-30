import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';

import styles from './index.less';

class UserPage extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props);
    }
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.welcome}>AllApp</div>
            </div>
        );
    }
}

export default connect(({ settings, user }) => ({
    settings,
    user,
}))(UserPage);
