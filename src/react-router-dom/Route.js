import React from 'react'
import RouteContext from './context'
import { pathToRegexp } from 'path-to-regexp';

export default class Route extends React.Component {
  static contextType = RouteContext;

  render() {
    const { path='/', component:Component, exact=false } = this.props;
    const { location } = this.context;
    let paramNames = []
    let regexp =  pathToRegexp(path, paramNames, {end: exact});
    let result = location.pathname.match(regexp);
    let props = {
      history: this.context.history
    }
    if(result) {
      return <Component {...props} />
    }
    return null;
  }
}