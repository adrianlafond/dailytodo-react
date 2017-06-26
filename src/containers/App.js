import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Day from './Day';
import Settings from './Settings';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/settings/:detail" component={Settings} />
            <Route path="/:year/:month/:date/:note" component={Day} />
            <Route path="/:year/:month/:date" component={Day} />
            <Route path="/:year/:month" component={Day} />
            <Route path="/:year" component={Day} />
            <Route component={Day}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps)(App);
