import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Day.css';

export default class Day extends Component {

  // This does not work here; see Day.propTypes at bottom.
  // static propTypes: {
  //   date: PropTypes.shape({
  //     year: PropTypes.number.isRequired,
  //     month: PropTypes.number.isRequired,
  //     date: PropTypes.number.isRequired,
  //   }),
  //   dateFormat: PropTypes.string.isRequired,
  // }

  render() {
    return (
      <div className="day card">
        <div className="card__inner">
          <h2 className="day__headline">{this.renderDate()}</h2>
        </div>
      </div>
    );
  }

  renderDate() {
    const { year, month, date } = this.props.date;
    const { dateFormat } = this.props;
    return moment([year, month, date]).format(dateFormat);
  }
}

Day.propTypes = {
    date: PropTypes.shape({
      year: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
    }),
    dateFormat: PropTypes.string.isRequired,
  }
