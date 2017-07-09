import React from 'react';

// Yes, this is basically the same thing as the stateful component example from: https://facebook.github.io/react/
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      intervalIndex: 0
    }
  }

  tick() {
    const nextSeconds = this.state.seconds + 1;

    // End of interval
    if (nextSeconds > this.props.intervals[this.state.intervalIndex]) {

      // End of segment
      if (this.state.intervalIndex === this.props.intervals.length - 1) {
        clearInterval(this.interval);
        this.interval = false;

      // On to the next segment
      } else {
        const newIntervalIndex = this.state.intervalIndex + 1;
        this.setState(({
          seconds: 1,
          intervalIndex: newIntervalIndex
        }));
        this.props.updateInterval(newIntervalIndex);
      }

    // Business as usual
    } else {
      this.setState({
        seconds: nextSeconds
      });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    console.log(`Next: ${nextProps.segment}`);
    if (nextProps.segment !== this.props.segment) {
      this.setState({
        seconds: 0,
        intervalIndex: 0
      });
      if (!this.interval) {
        this.interval = setInterval(() => this.tick(), 1000);
      }
    }
  }

  format(seconds) {
    const remainderSeconds = seconds % 60;
    return Math.floor(seconds / 60) + ':' + (remainderSeconds < 10 ? '0' : '') + remainderSeconds;
  }

  render() {
    return (
      <div>
        { `${this.format(this.state.seconds)} / ${this.format(this.props.intervals[this.state.intervalIndex])}` }
      </div>
    );
  }
}

export default Timer;
