import React from 'react'
import RouteContext from './context'
import { pathToRegexp } from 'path-to-regexp';

export default class Route extends React.Component {
  static contextType = RouteContext;

  render() {
    const { path = '/', component: Component, exact = false, render, children } = this.props;
    const { location } = this.context;
    let paramNames = []
    let regexp = pathToRegexp(path, paramNames, { end: exact });
    let result = location.pathname.match(regexp);
    let props = {
      history: this.context.history,
      location
    }
    if (result) {
      let [url, ...values] = result;
      paramNames = paramNames.map(item=> item.name);
      let params = values.reduce((memo,value,index)=>{
        memo[paramNames[index]] = value;
        return memo;
      },{});
      let match = {
        path,
        exact: url === location.pathname,
        params,
        url: location.pathname
      }
      props.match = match;
      if(Component) {
        return <Component {...props} />
      }else if(render) {
        return render(props)
      }else if(children) {
        return children(props)
      }
    }else if(children) {
      return children(props)
    }

    return null;
  }
}