import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router';

const Option = Select.Option;

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      current: 'index'
    };
  }

  clickMenu(e) {
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
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
            <Menu id="nav" mode="horizontal" onClick={(e) => this.clickMenu(e)} selectedKeys={[this.state.current]}>
              <Menu.Item key='index'><Link to="/">首页</Link></Menu.Item>
              <Menu.Item key='blog'><Link to="/blogs">博客</Link></Menu.Item>
              <Menu.Item>留言</Menu.Item>
              <Menu.Item>介绍</Menu.Item>
              <Menu.Item>博客</Menu.Item>
              <Menu.Item>留言</Menu.Item>
              <Menu.Item>介绍</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}
