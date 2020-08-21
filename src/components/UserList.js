import React from 'react';
import { Link } from '../react-router-dom';

export default class UserAdd extends React.Component {
  state = {
    users: []
  }
  
  componentDidMount() {
    let useStr = localStorage.getItem('users');
    let users = useStr ? JSON.parse(useStr): [];
    this.setState({users})
  }

  render() {
    return (
     <ul className="list-group">
      {
        this.state.users.map((user)=>{
          return <li key={user.id} className="list-group-item">
              <Link to={{pathname: `/user/detail/${user.id}`,state: {user}}}> {user.username}</Link>
          </li>
        })
      }
     </ul>
    )
  }
}