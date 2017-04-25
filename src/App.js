import React, { Component } from 'react';

import Timer from './components/Timer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Timer />
      </div>
    );
  }
}

export default App;
