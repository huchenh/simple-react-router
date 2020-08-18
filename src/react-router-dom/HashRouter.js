import React from 'react';
import RouteContext from './context';
import 'bootstrap/dist/css/bootstrap.css';

export default class HashRoute extends React.Component {

  state = {
    location: {
      pathname: window.location.hash.slice(1)
    }
  }

  listener = () => {
    this.setState({
      location:{
        ...this.state.location,
        pathname: window.location.hash.slice(1)
      }
    })
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.listener)
    window.location.hash = window.location.hash || '/';
  }

  componentWillUnmount() {
    window.removeEventListener(this.listener)
  }

  render() {
    const { location } = this.state;
    let value = {
      location,
      mode: 'hash',
      history: {
        push(to) {
          window.location.hash = to;
        }
      }
    }

    return <RouteContext.Provider value={value}>
      {this.props.children}
    </RouteContext.Provider>
  }
}