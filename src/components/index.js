import React, { Component } from 'react';
import '../styles/main.css';
import Nav from './nav';

export default class Index extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page-wrapper">
        <Nav />
        <div className="main-wrapper">
          { this.props.children }
        </div>
        <footer id="footer">
        </footer>
      </div>
    );
  }
}
