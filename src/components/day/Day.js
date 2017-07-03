import React, { Component } from 'react';
import PropTypes from 'prop-types';
import positionRect from '../util/positionRect';
import moment from 'moment';
import { getDayTasks } from '../../actions/actions-day';
import './Day.css';

export default class Day extends Component {

  render() {
    console.log(this.props);
    const { rect } = this.props;
    return (
      <div className="day card" style={positionRect(rect)}>
        <div className="card__inner">
          <h2 className="day__headline">{this.renderDate()}</h2>
          <p className="day__task">Task (medium font size)</p>
          <p className="day__note">Note (small font size)</p>
        </div>
      </div>
    );
  }

  renderDate() {
    const { year, month, date } = this.props.date;
    const { dateFormat } = this.props;
    return moment([year, month, date]).format(dateFormat);
  }

  componentDidMount() {
    if (this.props.tasks.status === null) {
      this.props.dispatch(getDayTasks(this.props.date));
    }
  }
}

Day.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rect: PropTypes.object.isRequired,
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  }),
  dateFormat: PropTypes.string.isRequired,
  tasks: PropTypes.shape({
    status: PropTypes.oneOfType([
      PropTypes.string,
    ]),
    values: PropTypes.array
  }).isRequired
}
