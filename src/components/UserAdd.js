import React from 'react';

export default class UserAdd extends React.Component {
  
  constructor() {
    super()
    this.usernameRef = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let username = this.usernameRef.current.value;
    let user = {id: Date.now(),username};
    let useStr = localStorage.getItem('users');
    let users = useStr ? JSON.parse(useStr): [];
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));

    this.props.history.push('/user/list');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>用户名</label>
          <input className="form-control" type="text" ref={this.usernameRef} />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    )
  }
}