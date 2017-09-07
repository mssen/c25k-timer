import React from 'react';
import PropTypes from 'prop-types';

const IntervalTracker = ({ current, total }) => (
  <div>
    {
      current === 0
        ? 'Warmup'
        : current > total
          ? 'Cooldown'
          : `${ current }/${ total }`
    } 
  </div>
);

IntervalTracker.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default IntervalTracker;