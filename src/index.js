import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter, Route } from 'react-router-dom';
import { HashRouter, Route, Link } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

ReactDOM.render(
  <HashRouter>
    <Link to='/'>首页</Link>
    <Link to='/user'>用户</Link>
    <Link to='/profile'>个人中心</Link>
    <Route path='/' exact component={Home} />
    <Route path='/user' component={User} />
    <Route path='/profile' component={Profile} />
  </HashRouter>,
  document.getElementById('root')
);
