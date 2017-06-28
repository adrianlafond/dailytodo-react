import React, { Component } from 'react';
import { connect } from 'react-redux';
import FORMATS from '../constants/date-formats';
import * as actions from '../actions/actions-app';

class Settings extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="settings">
        <h1>Settings</h1>
        <form>
          {this.renderDateFormats()}
        </form>
      </div>
    );
  }

  renderDateFormats() {
    const options = FORMATS.map((value, index) => {
      return (
        <option key={index} value={value}>
          {value}
        </option>
      );
    });
    return (
      <select
        value={this.props.dateFormat}
        onChange={this.onDateFormatChange.bind(this)}>
        {options}
      </select>
    );
  }

  onDateFormatChange(value) {
    this.props.dispatch(actions.changeDateFormat(event.target.value));
  }
}

const mapStateToProps = (state, props) => {
  return state.app
}

export default connect(mapStateToProps)(Settings);
