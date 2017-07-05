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

      // On to the next segment
      } else {
        this.setState((prevState) => ({
          seconds: 1,
          intervalIndex: prevState.intervalIndex + 1
        }));
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
