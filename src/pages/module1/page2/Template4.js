import React from 'react';
import { connect } from 'dva';
import { Components } from 'eccom-framework';
import AuthConfig from '@/components/pages/module/AuthConfig';

const { Layouts: { BasicLayout } } = Components;

@BasicLayout({
    pageName: 'Template4',
    narrow: false,
    authConfig: {
        ...AuthConfig
    }
})
class Template extends React.Component {
    render() {
        return <div>Template4</div>;
    }
}

export default Template;