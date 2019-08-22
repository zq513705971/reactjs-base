import React from 'react';
import { connect } from 'dva';
import { Components } from 'eccom-framework';
import AuthConfig from '@/components/pages/module/AuthConfig';

const { Layouts: { AuthPage, BasicLayout } } = Components;

// const Template = (props) => {
//     return <AuthPage title={"Template4"}
//         url={AuthConfig.Url}
//         docDefId={AuthConfig.DocDefId}
//         objectId={''}
//         actionType={AuthConfig.ActionType[0]}>
//         Template
//     </AuthPage>;
// };

@BasicLayout({
    moduleName: "模块",
    pageName: 'Welcome',
    narrow: true
})
class Template extends React.Component {
    render() {
        return <div>Welcome</div>;
    }
}

export default Template;