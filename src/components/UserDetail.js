import React from 'react'

export default class UserDetail extends React.Component {
  render() {
    return (
      <div>
        <p>用户Id：{this.props.match.params.id}</p>
        <p>用户名：</p>
      </div>
    )
  }
}