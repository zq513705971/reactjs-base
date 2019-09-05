import React from 'react';
import { connect } from 'dva';
import { Components } from 'eccom-framework-web';
import AuthConfig from '@/components/pages/module/AuthConfig';

const {
  Layouts: { withBasicLayout },
} = Components;

@withBasicLayout({
  pageName: 'Template3',
  narrow: false,
  authConfig: {
    ...AuthConfig,
  },
})
class Template extends React.Component {
  render() {
    return <div>Template3</div>;
  }
}

export default Template;
