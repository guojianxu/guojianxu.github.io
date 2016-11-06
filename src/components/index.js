import React, { Component } from 'react';
import { DatePicker } from 'antd';
import '../styles/main.css';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import { Menu } from 'antd';

const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className="page-wrapper">
        <header id="header">
          <Row>
            <Col span={4}>
              <a id="logo">
                <img alt="logo" src="pictures/logo.jpeg" />
                <span>徐健国</span>
              </a>
            </Col>
            <Col span={20}>
              <div id="search-box">
                <Select
                  value={this.state.value}
                  combobox
                  notFoundContent=""
                  dropdownClassName="component-select"
                  defaultActiveFirstOption={false}
                  showArrow={false}
                  filterOption={false}
                  placeholder="搜索文章...">
                  <Option key={1}>key 1</Option>
                  <Option key={2}>key 2</Option>
                  <Option key={3}>key 3</Option>
                </Select>
              </div>
              <Menu id="nav" mode="horizontal">
                <Menu.Item>首页</Menu.Item>
                <Menu.Item>博客</Menu.Item>
                <Menu.Item>留言</Menu.Item>
                <Menu.Item>介绍</Menu.Item>
                <Menu.Item>博客</Menu.Item>
                <Menu.Item>留言</Menu.Item>
                <Menu.Item>介绍</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </header>
        <div className="main-wrapper">
          <Row>
            <Col span={4}>
              <Menu mode="inline">
                <SubMenu title={<h4>十原则</h4>}>
                  <MenuItemGroup title="测试1">
                    <Menu.Item>测试11</Menu.Item>
                    <Menu.Item>测试12</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="测试2">
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span><span>测试</span></span>}>
                  <MenuItemGroup title="测试1">
                    <Menu.Item>测试11</Menu.Item>
                    <Menu.Item>测试12</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="测试2">
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span><span>测试</span></span>}>
                  <MenuItemGroup title="测试1">
                    <Menu.Item>测试11</Menu.Item>
                    <Menu.Item>测试12</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="测试2">
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span><span>测试</span></span>}>
                  <MenuItemGroup title="测试1">
                    <Menu.Item>测试11</Menu.Item>
                    <Menu.Item>测试12</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="测试2">
                    <Menu.Item>Option 3</Menu.Item>
                    <Menu.Item>Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>
            </Col>
            <Col span={20}></Col>
          </Row>
        </div>
        <footer id="footer">
        </footer>
      </div>
    );
  }
}
