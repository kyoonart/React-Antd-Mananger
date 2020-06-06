import React, { Component } from "react";
import { Menu } from "antd";
import menuConfig from "../../resource/menuConfig";
import { NavLink } from "react-router-dom";
import "./index.css";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
  //  constructor(props, context) {
  //       super(props, context)
  //   }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    console.log(menuTreeNode);

    this.setState({ menuTreeNode });
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.item title={item.title} key={item.key}>
           <NavLink to={item.key}> {item.title}</NavLink>
        </Menu.item>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        {/*<Menu theme="dark">{this.state.menuTreeNode}</Menu>*/}
      </div>
    );
  }
}
