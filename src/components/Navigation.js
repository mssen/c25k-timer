import React from 'react';

const Navigation = ({ week, day, triggerNavigation }) => {
  const handleNext = () => {
    triggerNavigation(1);
    return false;
  }

  const handlePrevious = () => {
    triggerNavigation(-1);
    return false;
  }

  return (
    <div>
      {
        !(week === 1 && day === 1)
          && <a href="#" onClick={ handlePrevious }>Week { day === 1 ? week - 1 : week }, Day { day === 1 ? 3 : day - 1 }</a>
      }
      ...
      {
        !(week === 9 && day === 3)
          && <a href="#" onClick={ handleNext }>Week { day === 3 ? week + 1 : week }, Day { day === 3 ? 1 : day + 1 }</a>
      }
    </div>
  )
}

export default Navigation;