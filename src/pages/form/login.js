import React, { Component } from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;
class LoginForm extends Component {
  handleSubmit = () => {
    const userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.userName}恭喜你，您通过校验了密码为${userInfo.userPwd}`
        );
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card title="登录">
          <Form layout="inline">
            <FormItem>
              <Input placrholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placrholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="error">取消</Button>
              <Button type="primary" style={{ marginLeft: "10px" }}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="水平表单">
          <Form layout="inline">
            <FormItem>
              {getFieldDecorator("userName", {
                initialValue: "jack",
                rules: [],
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placrholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("userPwd", {
                rules: [],
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placrholder="请输入密码"
                />
              )}
            </FormItem>
            <FormItem>
              <Button type="error">取消</Button>
              <Button
                type="primary"
                onClick={this.handleSubmit}
                style={{ marginLeft: "10px" }}
              >
                登录
              </Button>
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
              <a href="#" style={{ float: "right", display: "block" }}>
                忘记密码
              </a>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(LoginForm);
