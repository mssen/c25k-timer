import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

const Navigation = ({ week, day, triggerNavigation, showModal }) => {
  const handleNext = () => {
    triggerNavigation(1);
    return false;
  };

  const handlePrevious = () => {
    triggerNavigation(-1);
    return false;
  };

  return (
    <div>
      {!(week === 1 && day === 1) && (
        <button className="nav-button" onClick={handlePrevious}>
          &lsaquo;&lsaquo; Week {day === 1 ? week - 1 : week}, Day {day === 1 ? 3 : day - 1}
        </button>
      )}
      <button className="nav-button" onClick={showModal}>
        ...
      </button>
      {!(week === 9 && day === 3) && (
        <button className="nav-button" onClick={handleNext}>
          Week {day === 3 ? week + 1 : week}, Day {day === 3 ? 1 : day + 1} &rsaquo;&rsaquo;
        </button>
      )}
    </div>
  );
};

Navigation.propTypes = {
  week: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  triggerNavigation: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default Navigation;
