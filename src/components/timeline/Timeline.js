import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from '../day/Day';
import Settings from '../settings/Settings';

class Timeline extends Component {

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

const mapStateToProps = (state, props) => {
  return state;
}

export default connect(mapStateToProps)(Timeline);
