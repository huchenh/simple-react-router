import React from 'react';
import { MenuLink, Route } from '../react-router-dom';
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'


export default class Home extends React.Component {

  render() {
    return (<div className="row">
          <div className="col-md-2">
            <ul className="nav nav-stacked">
              <li><MenuLink to="/user/add">添加用户</MenuLink></li>
              <li><MenuLink to="/user/list">用户列表</MenuLink></li>
            </ul>
          </div>
          <div className="col-md-8">
            <Route path="/user/add" component={UserAdd} /> 
            <Route path="/user/list" component={UserList} /> 
            <Route path="/user/detail/:id" component={UserDetail} /> 
          </div>
      </div>)
  }
}