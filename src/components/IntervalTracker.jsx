import React from 'react';

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

export default IntervalTracker;