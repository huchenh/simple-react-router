import React from 'react'
import RouteContext from './context'

export default class Link extends React.Component {
  static contextType = RouteContext

  handleClick = (e) => {
    e.preventDefault();
    this.context.history.push(this.props.to);
  }

  render() {
    return (
      <a onClick={this.handleClick} href={`${this.context.mode ==='hash' ? '#':''}${this.props.to}`} {...this.props} >{ this.props.children }</a>
    )
  }
}