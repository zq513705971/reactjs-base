import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router-dom';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';

import { listAllApps } from '@/services/app';

import styles from './index.less';

class AppList extends React.Component {
    columns = [
        {
            title: '序号', dataIndex: 'id', width: 60,
            render: (text, row) => {
                return `#${row.id}`;
            }
        },
        { title: '名称', dataIndex: 'name', },
        {
            title: '状态', dataIndex: 'status',
            render: (text, row) => {
                return row.status == 1 ? '公开' : '私有';
            }
        },
        { title: '操作', dataIndex: 'operation' },
    ];

    constructor(props) {
        super(props);

        console.log(this.props);

        this.state = {
            loading: false,
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        listAllApps().then(result => {
            this.setState({
                loading: false,
                data: result.data
            })
        });
    }

    render() {
        let { data } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles['app-list']}>
                    <Table
                        size='small'
                        bordered
                        columns={this.columns}
                        dataSource={data}
                        pagination={false}
                        expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    />
                </div>
                <div className={styles['app-info']}></div>
            </div>
        );
    }
}

export default connect(({ settings, user }) => ({
    settings,
    user,
}))(AppList);
