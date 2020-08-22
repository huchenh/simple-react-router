import React from 'react';
import RouteContext from './context';

(function (history) {
  const originPushSate = history.pushState;
  history.pushState = (state, title, path) => {
    originPushSate.call(history, state, title, path);
    window.onpushstate && window.onpushstate(state, title, path)
  }
})(window.history)

export default class HashRoute extends React.Component {

  state = {
    location: {
      pathname: '/',
      state: {}
    }
  }

  listener = () => {
    this.setState({
      location: {
        ...this.state.location,
        pathname: window.location.hash.slice(1),
        state: this.locationState
      }
    })
  }

  componentDidMount() {
    window.onpopstate = window.onpushstate = (state,title, pathname)=> {

      this.setState({
        location: {
          ...this.state.location,
          pathname,
          state 
        }
      })
    }
  }

  componentWillUnmount() {
    window.onpopstate = window.onpushstate = null;
  }

  render() {
    const { location } = this.state;
    const that = this;
    let value = {
      location,
      mode: 'brower',
      history: {
        push(to) {
          if (that.block) {
            const allow = window.confirm(that.block(that.state.location));
            if (!allow) return;
          }
          if (typeof to === 'object') {
            const { pathname, state } = to
            window.history.pushState(state, null, pathname)
          } else {
            window.history.pushState('', '', to)
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