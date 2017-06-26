import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {

  render() {
    return (
      <h1>Settings</h1>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps)(Settings);
