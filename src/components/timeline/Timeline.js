import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from '../day/Day';
import Settings from '../settings/Settings';

class Timeline extends Component {

  render() {
    const {app, dispatch} = this.props;
    return (
      <div className="timeline">
        <Day date={this.validDate()} dateFormat={app.dateFormat} dispatch={dispatch} />
        <Settings app={app} dispatch={dispatch} />
      </div>
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
