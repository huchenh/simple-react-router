import React from 'react'
import RouteContext from './context'

export default class Prompt extends React.Component {
  static contextType = RouteContext
  
  componentWillUnmount() {
    this.context.history.block(null);
  }

  render() {
    const { history } = this.context;
    const { when,message } = this.props;
    if(when) {
      history.block(message)
    }else{
      history.block(null)
    }
    return null;
  }
}