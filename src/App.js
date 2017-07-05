import React from 'react';

import Timer from './components/Timer'
import Navigation from './components/Navigation'

import './App.css';
import { WARMUP, COOLDOWN } from './data/constants'
import { SEGMENTS } from './data/segments'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { segment: 0 };

    this.updateSegment = this.updateSegment.bind(this);
  }

  updateSegment(adjustment) {
    this.setState((prevState) => ({
      segment: prevState.segment + adjustment
    }));
  }

  render() {
    const segment = SEGMENTS[this.state.segment];
    return (
      <div className="main">
        <h1>Week { segment.week }</h1>
        <h1>Day { segment.day }</h1>
        <p>Interval count: { segment.intervals.length }</p>

        <Navigation
          week={ segment.week }
          day={ segment.day }
          triggerNavigation={ this.updateSegment } />
      </div>
    );
  }
}

export default App;
