
import React from 'react';
import PropTypes from 'prop-types';

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

PickerModal.propTypes = {
  segments: PropTypes.array.isRequired,
  currentSegment: PropTypes.number.isRequired,
  hideModal: PropTypes.func.isRequired,
  updateSegment: PropTypes.func.isRequired
}

export default PickerModal;