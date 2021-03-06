import React from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

// Yes, this is basically the same thing as the stateful component example from: https://facebook.github.io/react/
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      intervalIndex: 0
    };
  }

  tick() {
    const nextSeconds = this.state.seconds + 1;

    // End of interval
    if (nextSeconds > this.props.intervals[this.state.intervalIndex]) {
      // End of segment
      if (this.state.intervalIndex === this.props.intervals.length - 1) {
        this.stop();

        // On to the next interval
      } else {
        const newIntervalIndex = this.state.intervalIndex + 1;
        this.setState({
          seconds: 1,
          intervalIndex: newIntervalIndex
        });
        this.props.updateInterval(newIntervalIndex);
      }

      // Business as usual
    } else {
      this.setState({
        seconds: nextSeconds
      });
    }
  }

  start() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = false;
  }

  componentDidMount() {
    this.props.play && this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.segment !== this.props.segment) {
      this.setState({
        seconds: 0,
        intervalIndex: 0
      });
    }
    if (!this.interval && nextProps.play) {
      this.start();
    }
    if (this.interval && !nextProps.play) {
      this.stop();
    }
  }

  format(seconds) {
    const remainderSeconds = seconds % 60;
    return (
      Math.floor(seconds / 60) +
      ':' +
      (remainderSeconds < 10 ? '0' : '') +
      remainderSeconds
    );
  }

  render() {
    return (
      <div>
        <span className="current-time">{this.format(this.state.seconds)}</span>
        <span className="total-time">
          /{this.format(this.props.intervals[this.state.intervalIndex])}
        </span>
      </div>
    );
  }
}

Timer.propTypes = {
  intervals: PropTypes.array.isRequired,
  updateInterval: PropTypes.func.isRequired,
  segment: PropTypes.number.isRequired,
  play: PropTypes.bool.isRequired
};

export default Timer;
