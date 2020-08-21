import React from 'react';
import RouteContext from './context';
import 'bootstrap/dist/css/bootstrap.css';

export default class HashRoute extends React.Component {

  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state:{}
    }
  }

  listener = () => {
    this.setState({
      location:{
        ...this.state.location,
        pathname: window.location.hash.slice(1),
        state: this.locationState
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
    const that = this;
    let value = {
      location,
      mode: 'hash',
      history: {
        push(to) {
          if(that.block) {
           const allow = window.confirm(that.block(that.state.location));
           if(!allow) return;
          }
          if(typeof to === 'object') {
            const { pathname, state } = to
            window.location.hash = pathname
            that.locationState = state;
          }else{
            window.location.hash = to;
          }
        },
        block(message) {
          that.block = message;
        }
      }
    }

    return <RouteContext.Provider value={value}>
      {this.props.children}
    </RouteContext.Provider>
  }
}