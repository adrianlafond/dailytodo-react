import React, { Component } from 'react';
import PropTypes from 'prop-types';
import positionRect from '../util/positionRect';
import moment from 'moment';
import { getDayTasks } from '../../actions/actions-day';
import Task from './Task';
import { EMPTY } from '../../constants/tasks';
import './Day.css';

export default class Day extends Component {

  render() {
    const { rect } = this.props;
    return (
      <div className="day card" style={positionRect(rect)}>
        <div className="card__inner">
          <h2 className="day__headline">{this.renderDate()}</h2>
          {this.renderTasks()}
          <Task task={{ type: EMPTY }} />
        </div>
      </div>
    );
  }

  renderDate() {
    const { year, month, date } = this.props.date;
    const { dateFormat } = this.props;
    return moment([year, month, date]).format(dateFormat);
  }

  renderTasks() {
    return this.props.tasks.items.map((task, index) => {
      return (
        <Task key={index} task={task} />
      );
    });
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
    items: PropTypes.array.isRequired,
  }).isRequired
}
