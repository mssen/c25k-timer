import React from 'react';

import Timer from './components/Timer';
import Navigation from './components/Navigation';
import IntervalTracker from './components/IntervalTracker';

import './App.css';
import { SEGMENTS } from './data/segments';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segment: 0,
      interval: 0
    };

    this.updateSegment = this.updateSegment.bind(this);
    this.updateInterval = this.updateInterval.bind(this);
  }

  updateSegment(adjustment) {
    this.setState((prevState) => ({
      segment: prevState.segment + adjustment
    }));
  }

  updateInterval(newInterval) {
    this.setState({ interval: newInterval });
  } 

  render() {
    const segment = SEGMENTS[this.state.segment];
    return (
      <div className="main">
        <h1>Week { segment.week }</h1>
        <h1>Day { segment.day }</h1>

        <div>
          Segment
          <Timer intervals={ segment.intervals } updateInterval={ this.updateInterval } />
        </div>

        <div>
          Total Time
          <Timer intervals={ [ segment.intervals.reduce((prev, curr) => prev + curr) ] } />
        </div>

        <IntervalTracker current={ this.state.interval } total={ segment.intervals.length - 2 } />

        <Navigation
          week={ segment.week }
          day={ segment.day }
          triggerNavigation={ this.updateSegment } />
      </div>
    );
  }
}

export default App;
