import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {

  render() {
    return (
      <div className="settings">
        <h1>Settings</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps)(Settings);
