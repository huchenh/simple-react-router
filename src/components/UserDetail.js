import React from 'react'

export default class UserDetail extends React.Component {
  state = {
    user: {}
  }
  componentDidMount() {
    let { user } = this.props.location.state;
    if(!user) {
      const usersStr = localStorage.getItem('users');
      const users = JSON.parse(usersStr);
      const id = this.props.match.params.id;
      user = users.find(user => user.id === Number(id));
    }
    this.setState({user});
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <p>用户Id：{user.id}</p>
        <p>用户名：{ user.username }</p>
      </div>
    )
  }
}