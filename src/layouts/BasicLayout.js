import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Menu, Icon, Spin, Modal, Tabs } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import routesConfig from '../../config/routes.config';
import defaultSettings from '../../config/defaultSettings';

import MenuLeft from '@/components/MenuLeft';

import styles from './BasicLayout.less';
import logo from '@/assets/eccom-logo.png'

const { SubMenu } = Menu;
const { confirm } = Modal;
const { TabPane } = Tabs;

const BasicLayout = props => {
  const {
    dispatch,
    children,
    location: { pathname },
    route: { routes, path },
    user: { currentUser }
  } = props;

  let [actionTab, setActionTab] = useState(undefined);
  let [tabs, setTabs] = useState([]);

  console.log("props", props);

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  return <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.user}>
        <div className={styles.loginUser}>欢迎您，{currentUser && currentUser.name}</div>
        <Button type="danger" size='small' onClick={() => {
          confirm({
            title: '退出',
            content: '确定要退出吗？',
            onOk() {
              if (dispatch) {
                dispatch({
                  type: 'user/logoutCurrent',
                });
              }
            },
            onCancel() { },
          });
        }}>退出</Button>
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.menu}>
        <MenuLeft onOpenTab={(tab) => {
          let newActionTab = (tabs || []).find((tabInfo) => {
            return tabInfo.key === tab.name;
          });
          console.log("tab", tab, newActionTab);
          if (!newActionTab) {
            newActionTab = { key: tab.name, ...tab };
            setTabs([...(tabs || []), newActionTab]);
          }
          setActionTab(newActionTab);
        }}></MenuLeft>
      </div>
      <div className={styles.content}>
        {
          tabs && tabs.length > 0 ?
            <div className={styles['tab-container']}>
              <Tabs
                hideAdd
                className={styles['tab-container']}
                tabBarStyle={{ margin: 0 }}
                activeKey={actionTab && actionTab.key}
                onChange={(activeKey) => {
                  let newActionTab = (tabs || []).find((tabInfo) => {
                    return tabInfo.key === activeKey;
                  });
                  setActionTab(newActionTab);
                }}
                onEdit={(targetKey, action) => {
                  let newTabs = [...(tabs || []).filter(tab => {
                    return tab.key !== targetKey;
                  })]
                  setTabs(newTabs);
                  newTabs && newTabs.length > 0 ? setActionTab(newTabs[newTabs.length - 1]) : setActionTab(undefined);
                }}
                type="editable-card"
              >
                {tabs.map(pane => (
                  <TabPane tab={pane.title} key={pane.key}>
                    <pane.Component />
                  </TabPane>
                ))}
              </Tabs>
            </div>
            : children
        }
      </div>
    </div>
    <div className={styles.footer}>
      Copyright © {new Date().getFullYear()} All rights reserved 上海华讯网络系统有限公司信息系统部版权所有
    </div>
  </div>;
};

export default connect(({ settings, user }) => ({
  settings,
  user,
}))(BasicLayout);
