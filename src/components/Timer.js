import React, { Component } from 'react';

// Yes, this is basically the same thing as the stateful component example from: https://facebook.github.io/react/
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 }
  }

  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }));
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
        Total Time: { this.format(this.state.seconds) }
      </div>
    );
  }
}

export default Timer;
