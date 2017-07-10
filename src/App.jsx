import React from 'react';

import Timer from './components/Timer';
import Navigation from './components/Navigation';
import IntervalTracker from './components/IntervalTracker';
import PickerModal from './components/PickerModal';

import './App.css';
import { SEGMENTS } from './data/segments';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segment: 0,
      interval: 0,
      showModal: false
    };

    this.updateSegment = this.updateSegment.bind(this);
    this.updateInterval = this.updateInterval.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  updateSegment(adjustment) {
    this.setState((prevState) => ({
      segment: prevState.segment + adjustment,
      interval: 0
    }));
  }

  updateInterval(newInterval) {
    this.setState({ interval: newInterval });
  }

  showModal() {
    this.setState({
      showModal: true
    })
  }

  hideModal() {
    this.setState({
      showModal: false
    })
  }

  getIntervalType() {
    const currentInterval = this.state.interval;
    if (currentInterval === 0) {
      return 'Warmup';
    } else if (currentInterval === SEGMENTS[this.state.segment].intervals.length - 1) {
      return 'Cooldown';
    } else if (currentInterval % 2 === 1) {
      return 'Run';
    } else {
      return 'Walk';
    }
  }

  render() {
    const segment = SEGMENTS[this.state.segment];

    return (
      <div className="main">
        <h1>Week { segment.week }</h1>
        <h1>Day { segment.day }</h1>

        <div>
          { this.getIntervalType() }
          <Timer
            intervals={ segment.intervals }
            updateInterval={ this.updateInterval }
            segment={ this.state.segment } />
        </div>

        <div>
          Total Time
          <Timer
            intervals={ [ segment.intervals.reduce((prev, curr) => prev + curr) ] }
            updateInterval={ () => '' }
            segment={ this.state.segment } />
        </div>

        <IntervalTracker current={ this.state.interval } total={ segment.intervals.length - 2 } />

        <Navigation
          week={ segment.week }
          day={ segment.day }
          triggerNavigation={ this.updateSegment }
          showModal={ this.showModal } />

        {
          this.state.showModal
            && <PickerModal segments={ SEGMENTS }
                currentSegment={ this.state.segment }
                updateSegment={ this.updateSegment }
                hideModal={ this.hideModal } />
        }
      </div>
    );
  }
}

export default App;
