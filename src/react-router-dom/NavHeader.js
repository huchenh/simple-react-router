import React from 'react';
import Route from './Route';
import withRouter from './withRouter'
import './MenuLink.css'

class NavHeader extends React.Component {

  render() {
    return (
      <div className="navvar-header">
        <a className="navbar-brand" onClick={()=> this.props.history.push('/')}> Home</a>
      </div>
     
    )
  }
}

export default withRouter(NavHeader);