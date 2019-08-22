import React from 'react';
import { connect } from 'dva';
import { Components } from 'eccom-framework';
import AuthConfig from '@/components/pages/module/AuthConfig';

const { Layouts: { BasicLayout } } = Components;

@BasicLayout({
    pageName: 'Template3',
    narrow: true,
    authConfig: {
        ...AuthConfig
    }
})
class Template extends React.Component {
    render() {
        return <div>Template3</div>;
    }
}

export default Template;