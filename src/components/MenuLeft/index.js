
import React, { useState } from 'react';
import { Button, Menu, Icon, Spin, Modal } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import routesConfig from '../../../config/routes.config';

import AllApp from '@/pages/app/AllApp';
import MyApp from '@/pages/app/MyApp';
import Privilages from '@/pages/sys/Privilages';
import Log from '@/pages/sys/Log';
import User from '@/pages/sys/User';

import styles from './index.less';

const { SubMenu } = Menu;

let menuData = [{
    title: '应用管理',
    name: 'AppMgr',
    icon: 'mail',
    children: [{
        title: '全部应用',
        name: 'AllApp',
        Component: AllApp
    }, {
        title: '我的应用',
        name: 'MyApp',
        Component: MyApp
    }]
}, {
    title: '系统管理',
    name: 'SysMgr',
    icon: 'setting',
    children: [{
        title: '应用权限',
        name: 'Privilages',
        Component: Privilages
    }, {
        title: '用户管理',
        name: 'User',
        Component: User
    }, {
        title: '日志查询',
        name: 'Log',
        Component: Log
    }]
}];

export default (props) => {
    let { onOpenTab } = props;
    let [collapsed, setCollapsed] = useState(false);
    if (collapsed)
        return <div className={styles.collapsed}>
            <Icon onClick={() => {
                setCollapsed(false);
            }} className={styles.arrowLeft} type="double-right" />
        </div>;

    let handleClick = (e) => {
        for (let index = 0; index < menuData.length; index++) {
            let menuItem = menuData[index].children.find(child => {
                return child.name === e.key;
            });
            if (menuItem) {
                onOpenTab && onOpenTab(menuItem);
                return;
            }
        }
    }

    return <div className={styles.container}>
        <div className={styles.header}>导航菜单<Icon onClick={() => {
            setCollapsed(true);
        }} className={styles.arrowLeft} type="double-left" /></div>
        <Menu onClick={handleClick}
            className={styles.menu} mode="inline">
            {
                menuData.map((item) => {
                    return <SubMenu key={item.name} title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }
                    >
                        {
                            item.children.map(child => {
                                return <Menu.Item key={child.name}>{child.title}</Menu.Item>
                            })
                        }
                    </SubMenu>
                })
            }
        </Menu>
    </div>;
};