import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import Day from '../components/day/Day';
import Settings from '../components/settings/Settings';

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  render() {
    return (
      <div className="timeline">
        {this.renderDays()}
        {this.renderSettings()}
      </div>
    );
  }

  renderDays() {
    const { app, dispatch } = this.props;
    const { width, height } = this.state;
    return (
      <Day
        rect={{ x: 0, y: 0, width, height }}
        date={this.validDate()}
        dateFormat={app.dateFormat}
        dispatch={dispatch}
      />
    );
  }

  renderSettings() {
    const { app, dispatch } = this.props;
    const { width, height } = this.state;
    const settingsRect = { x: 0, y: height, width, height, };
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

  componentDidMount() {
    this.measureWindowSize();
  }

  componentWillUnmount() {
    this.stopMeasureWindowSize();
  }

  measureWindowSize() {
    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }

  stopMeasureWindowSize() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.props.match.params, nextProps.match.params) ||
      this.state.width !== nextState.innerWidth ||
      this.state.height !== nextState.innerHeight;
  }
}

const mapStateToProps = (state, props) => {
  return state
}

export default connect(mapStateToProps)(Timeline);
