import React from 'react';
import Link from './Link';
import Route from './Route';
import './MenuLink.css'

export default class MenuLink extends React.Component {

  render() {
    const { exact,to,children } = this.props
    return (
      <Route exact={exact} path={to} children={props => {
        return  <Link className={ props.match ? 'active': ''} exact={exact} to={to}> {children} </Link>
      }} />
     
    )
  }
}