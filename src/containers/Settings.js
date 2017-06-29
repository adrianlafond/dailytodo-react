import React, { Component } from 'react';
import { connect } from 'react-redux';
import FORMATS from '../constants/date-formats';
import THEMES from '../themes/';
import * as actions from '../actions/actions-app';
import './Settings.css';

class Settings extends Component {

  render() {
    return (
      <div className="settings card">
        <div className="card__inner">
          <h2 className="settings__headline">Settings</h2>
          <form>
            {this.renderDateFormats()}
            {this.renderThemes()}
          </form>
        </div>
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
        className="settings__date-format select"
        value={this.props.dateFormat}
        onChange={this.onDateFormatChange.bind(this)}>
        {options}
      </select>
    );
  }

  renderThemes() {
    const options = THEMES.map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.label}
        </option>
      );
    });
    return (
      <select
        className="settings__theme select"
        value={this.props.theme}
        onChange={this.onThemeChange.bind(this)}>
        {options}
      </select>
    );
  }

  onDateFormatChange(event) {
    this.props.dispatch(actions.changeDateFormat(event.target.value));
  }

  onThemeChange(event) {
    this.props.dispatch(actions.changeTheme(event.target.value));
  }
}

const mapStateToProps = (state, props) => {
  return state.app
}

export default connect(mapStateToProps)(Settings);
