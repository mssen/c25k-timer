
import React from 'react';

const PickerModal = ({ segments, currentSegment, hideModal }) => {
  return (
    <div>
      <header>
        <h1>Pick a Day</h1>

        <button onClick={ hideModal }>Close</button>
      </header>

      BODY
    </div>
  );
};

export default PickerModal;