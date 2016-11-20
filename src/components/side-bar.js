import React, { Component } from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SideBar extends Component {
  render() {
    return (
      <Menu mode="inline">
        {
          this.props.dataSet && this.props.dataSet.map((item, index) => {
            if(item.children) {
              return (
                <SubMenu key={item.key} title={<h4>{item.title}</h4>}>
                  {
                    item.children.map(child => {
                      return (
                        <Menu.Item key={child.key}><a>{child.title}</a></Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={item.key}><a>{item.title}</a></Menu.Item>
              )
            }
          })
        }
      </Menu>
    );
  }
}
