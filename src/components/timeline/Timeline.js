import React, { Component } from 'react';
import Day from '../day/Day';
import Settings from '../settings/Settings';

export default class Timeline extends Component {

  render() {
    const {match, app} = this.props;
    console.log(this.props);
    return (
      <div className="timeline">
        <Day match={match} />
        <Settings app={app} />
      </div>
    );
  }

  componentDidMount() {
    this.validateRoute();
  }

  componentDidUpdate() {
    this.validateRoute();
  }

  validateRoute() {
    // const { year, month, date } = this.props.match.params;
    // if (date === undefined) {
    //   window.location.replace(`#/${year}/${month}/1`);
    // }
  }
}
