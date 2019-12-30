import React, { useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';

import styles from './index.less';

const LoginPage = (props) => {
  const { dispatch } = props;
  const { getFieldDecorator } = props.form;
  let handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      dispatch && dispatch({
        type: 'user/login',
        payload: values
      });
    });
  }

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item style={{ margin: 0 }}>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item style={{ margin: 0 }}>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item style={{ margin: 0 }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default connect(({ settings, user }) => ({
  settings,
  user,
}))(Form.create()(LoginPage));
