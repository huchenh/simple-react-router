import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter, Route } from 'react-router-dom';
import { BrowerRouter as Router, Route, Link, Switch, Redirect, MenuLink } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <>
      <nav className="navbar navbar-inverse">
        <div className="fluid-container" >
          <div className="navvar-header">
            <Link className="navbar-brand" to="/"> Home</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><MenuLink exact={true} to='/'>首页</MenuLink></li>
            <li><MenuLink to='/user'>用户</MenuLink></li>
            <li><MenuLink to='/profile'>个人中心</MenuLink></li>
          </ul>
        </div>
      </nav>
      <div className="fluid-container">
        <div className="row">
          <div className="col-mod-8 col-md-offset-2">
            <Switch>
              <Route path='/' exact={true} component={Home} />
              <Route path='/user' component={User} />
              <Route path='/profile' component={Profile} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
      </div>
    </>
    
  </Router>,
  document.getElementById('root')
);
