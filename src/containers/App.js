import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Timeline from '../components/timeline/Timeline';
import './App.css';
import '../components/inputs/select.css';
import '../components/card/card.css';

class App extends Component {

  render() {
    const theme = `theme--${this.props.app.theme}`;
    return (
      <Router>
        <div className={`app ${theme}`}>
          <Switch>
            <Route path="/settings/:detail" component={Timeline} />
            <Route path="/settings" component={Timeline} />
            <Route path="/:year/:month/:date/:note" component={Timeline} />
            <Route path="/:year/:month/:date" component={Timeline} />
            <Route path="/:year/:month" component={Timeline} />
            <Route path="/:year" component={Timeline} />
            <Route component={Timeline}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps)(App);
