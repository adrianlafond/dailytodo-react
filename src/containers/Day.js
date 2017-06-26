import React, { Component } from 'react';
import { connect } from 'react-redux';

class Day extends Component {

  render() {
    const { year, month, date } = this.props.match.params;
    console.log(this.props)
    return (
      <div className="day">
        <p>{year}/{month}/{date}</p>
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

export default connect(mapStateToProps)(Day);
