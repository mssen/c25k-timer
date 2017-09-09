import React from 'react';
import PropTypes from 'prop-types';

import './IntervalTracker.css';

const IntervalTracker = ({ current, total }) => {
  const displayCurrent = current > total ? current - 1 : current;

  return (
    <div>
      <span className="current-interval">{ displayCurrent }</span>
      /
      <span className="total-interval">{ total }</span>
    </div>
  )
};

IntervalTracker.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default IntervalTracker;