import React, { Component } from 'react';

import Timer from './components/Timer'
import Navigation from './components/Navigation'

import './App.css';
import { WARMUP, COOLDOWN } from './data/constants'
import { DAYS } from './data/days'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { day: 0 };
  }

  render() {
    const day = DAYS[this.state.day];
    return (
      <div className="main">
        <h1>Week { day.week }</h1>
        <h1>Day { day.day }</h1>
        <p>Interval count: { day.intervals.length }</p>

        <Navigation
          week={ day.week }
          day={ day.day }
          triggerNavigation={ (week, day) => console.log(`Week ${week}, Day ${day}`) } />
      </div>
    );
  }
}

export default App;
