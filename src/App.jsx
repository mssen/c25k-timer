import React from 'react';

import Timer from './components/Timer';
import Navigation from './components/Navigation';
import IntervalTracker from './components/IntervalTracker';
import PickerModal from './components/PickerModal';

import './App.css';
import { SEGMENTS } from './data/segments';
import ding from './data/265012__sethlind__toaster-oven-ding.mp3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segment: 0,
      interval: 0,
      showModal: false,
      play: false
    };

    this.audio = new Audio(ding);
  }

  updateSegment = (adjustment) => {
    this.setState((prevState) => ({
      segment: prevState.segment + adjustment,
      interval: 0,
      play: false,
      showModal: false
    }));
  };

  updateInterval = (newInterval) => {
    this.setState({ interval: newInterval });
    this.audio.play();
  };

  showModal = () => {
    this.setState({
      showModal: true
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false
    });
  };

  playPause = () => {
    this.setState((prevState) => ({
      play: !prevState.play
    }));
  };

  getIntervalType() {
    const currentInterval = this.state.interval;
    if (currentInterval === 0) {
      return 'Warmup';
    } else if (
      currentInterval ===
      SEGMENTS[this.state.segment].intervals.length - 1
    ) {
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
        <h1 className="main-header">Week {segment.week}</h1>
        <h1 className="main-header gray">Day {segment.day}</h1>

        <div className="interval-timer center">
          <span className="interval-text gray">{this.getIntervalType()}</span>
          <Timer
            intervals={segment.intervals}
            updateInterval={this.updateInterval}
            segment={this.state.segment}
            play={this.state.play}
          />
        </div>

        <div className="horizontal">
          <div>
            <h2 className="sub-header">Total Time</h2>
            <Timer
              intervals={[
                segment.intervals.reduce((prev, curr) => prev + curr)
              ]}
              updateInterval={() => ''}
              segment={this.state.segment}
              play={this.state.play}
            />
          </div>

          <div className="play-container">
            <button className="play-button" onClick={this.playPause}>
              {this.state.play ? 'Pause' : 'Play'}
            </button>
          </div>

          <div className="intervals">
            <h2 className="sub-header">Intervals</h2>
            <IntervalTracker
              current={this.state.interval}
              total={segment.intervals.length - 2}
            />
          </div>
        </div>

        <div className="center navigation">
          <Navigation
            week={segment.week}
            day={segment.day}
            triggerNavigation={this.updateSegment}
            showModal={this.showModal}
          />
        </div>

        {this.state.showModal && (
          <PickerModal
            segments={SEGMENTS}
            currentSegment={this.state.segment}
            updateSegment={this.updateSegment}
            hideModal={this.hideModal}
          />
        )}
      </div>
    );
  }
}

export default App;
