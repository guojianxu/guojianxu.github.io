import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from './reducers';
import Index from './components/index';
import 'antd/dist/antd.css';

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
