import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import { Components } from 'eccom-framework';
import AuthConfig from '@/components/pages/module/AuthConfig';

import styles from './index.less';

const {
  Layouts: { withBasicLayout },
  SelectFields: { SelectFieldOffice, SelectFieldEmployeeTypes, SelectFieldPersonTypes },
  InputFields: { InputFieldPerson, InputFieldPersonMulti },
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
        <div className={styles.item}>
          <Link to="/index">Welcome</Link>
        </div>
        <div className={styles.item}>
          <Link to="/module1/page2/template3">HideInMenu</Link>
        </div>
        <div className={styles.item}>
          <SelectFieldOffice />
        </div>
        <div className={styles.item}>
          <SelectFieldEmployeeTypes />
        </div>
        <div className={styles.item}>
          <SelectFieldPersonTypes />
        </div>
        <div className={styles.item}>
          <InputFieldPerson allowClear value="ZhanQun82608" />
        </div>
        <div className={styles.item}>
          <InputFieldPersonMulti allowClear value="wwz;jacky" />
        </div>
        <div className={styles.item}>
          <InputFieldPersonMulti allowClear value="ZhanQun82608" />
        </div>
      </div>
    );
  }
}

export default Template;
