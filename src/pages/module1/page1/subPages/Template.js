import React from 'react';
import { connect } from 'dva';
import { Components } from 'eccom-framework-web';
import AuthConfig from '@/components/pages/module/AuthConfig';

const {
  Layouts: { withFixedNavbarLayout },
} = Components;

@withFixedNavbarLayout({
  pageName: 'SubPage',
  narrow: false,
  authConfig: {
    ...AuthConfig,
  },
})
class Template extends React.Component {
  render() {
    return <div>SubPage</div>;
  }
}

export default Template;
