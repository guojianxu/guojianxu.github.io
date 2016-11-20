import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SideBar from './side-bar';

export default class Blog extends Component {
  constructor() {
    super();
    this.sideBarDataSet = [
      {
        title: '所有文章',
        key: 'all-page'
      },
      {
        title: '分类',
        key: 'category',
        children: [
          {
            title: 'React',
            key: 'react'
          },
          {
            title: 'Java',
            key: 'java'
          }
        ]
      }
    ];
  }

  render() {
    return (
      <Row>
        <Col span={4}>
          <SideBar dataSet={this.sideBarDataSet}/>
        </Col>
        <Col span={20}>
          <div className="main-container">
            <article className="markdown">
              <h1>安装</h1>
              <section className="toc">
                <ul>
                  <li><a href="#test">使用-npm-安装</a></li>
                  <li><a href="#">浏览器引入</a></li>
                  <li><a href="#">开发工具</a></li>
                </ul>
              </section>
              <section className="markdown">
                <h2 id="test">使用npm安装</h2>
                <p><strong>我们推荐使用 npm 的方式进行开发</strong>，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
                <p><strong>我们推荐使用 npm 的方式进行开发</strong>，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
                <p><strong>我们推荐使用 npm 的方式进行开发</strong>，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>

              </section>
            </article>
          </div>
        </Col>
      </Row>
    );
  }
}
