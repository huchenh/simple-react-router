import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter, Route } from 'react-router-dom';
import { HashRouter, Route, Link, Switch, Redirect } from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

ReactDOM.render(
  <HashRouter>
    <>
      <nav className="navbar navbar-inverse">
        <div className="fluid-container" >
          <div className="navvar-header">
            <Link className="navbar-brand" to="/"> Home</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/user'>用户</Link></li>
            <li><Link to='/profile'>个人中心</Link></li>
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
    
  </HashRouter>,
  document.getElementById('root')
);
