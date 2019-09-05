import React from 'react';
import { connect } from 'dva';
import { Components } from 'eccom-framework-web';
import AuthConfig from '@/components/pages/module/AuthConfig';

const {
  Layouts: { withFixedNavbarLayout },
} = Components;

@withFixedNavbarLayout({
  pageName: 'Template1',
  narrow: true,
  authConfig: {
    ...AuthConfig,
  },
})
class Template extends React.Component {
  render() {
    return <div>Template1</div>;
  }
}

export default Template;
