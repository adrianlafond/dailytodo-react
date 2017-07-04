import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STANDARD, REPEAT } from '../../constants/tasks';
import './Task.css';

export default class Task extends Component {

  static propTypes = {
    task: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="task">
        {this.renderTask()}
      </div>
    );
  }

  renderTask() {
    switch (this.props.task.type) {
      case STANDARD:
        break;
      case REPEAT:
        break;
      default:
        return (
          <p className="task__empty">
            Enter a task...
          </p>
        );
    }
  }
}
