import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoute, changeTheme } from '../actions/actions-app';
import ReactSuperSimpleRouter from '../components/lib/ReactSuperSimpleRouter';

class App extends Component {

  constructor() {
    super();
    this.test = this.test.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ReactSuperSimpleRouter
          route={this.props.app.route}
          onChange={this.onRouteChange}
        />
        <h1>Daily Todo</h1>
        <button onClick={this.test.bind(this)}>Test</button>
        {this.renderPage()}
      </div>
    );
  }

  renderPage() {
    switch (this.props.app.route[0]) {
      default:
        return null;
    }
  }

  test() {
    this.props.dispatch(changeTheme('dark'));
  }

  onRouteChange(route) {
    this.props.dispatch(changeRoute(route));
  }
}

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps)(App);
