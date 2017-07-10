
import React from 'react';

const PickerModal = ({ segments, currentSegment, hideModal, updateSegment }) => (
  <div>
    <header>
      <h1>Pick a Day</h1>

      <button onClick={ hideModal }>Close</button>
    </header>

    {
      segments.map((segment, index) => 
        <button key={ index } onClick={ () => updateSegment(index - currentSegment) }>
          { `Week ${segment.week}, Day ${segment.day}` }
        </button>
      )
    }
  </div>
);

export default PickerModal;