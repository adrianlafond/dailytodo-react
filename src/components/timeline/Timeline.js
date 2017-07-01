import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from '../day/Day';
import Settings from '../settings/Settings';

class Timeline extends Component {

  render() {
    return (
      <div className="timeline">
        {this.renderDays()}
        {this.renderSettings()}
      </div>
    );
  }

  renderDays() {
    const {app, dispatch} = this.props;
    return (
      <Day
        rect={{ x: 20, y: 20, width: 300, height: 400 }}
        date={this.validDate()}
        dateFormat={app.dateFormat}
        dispatch={dispatch}
      />
    );
  }

  renderSettings() {
    const {app, dispatch} = this.props;
    const settingsRect = {
      x: 20,
      y: 460,
      width: 300,
      height: 400,
    };
    return (
      <Settings app={app} dispatch={dispatch} rect={settingsRect} />
    );
  }

  validDate() {
    let { year, month, date } = this.props.match.params;
    if (year === undefined || month === undefined || date === undefined) {
      const d = new Date();
      year = (year === undefined) ? d.getFullYear() : year;
      month = (month === undefined) ? d.getMonth() : month;
      date = (date === undefined) ? d.getDate() : date;
    }
    year = +year;
    month = +month;
    date = +date;
    return { year, month, date };
  }
}

const mapStateToProps = (state, props) => {
  return state
}

export default connect(mapStateToProps)(Timeline);
