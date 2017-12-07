import React from 'react';
import PropTypes from 'prop-types';

import './PickerModal.css';

const PickerModal = ({ segments, currentSegment, hideModal, updateSegment }) => (
  <div>
    <div className="overlay" />
    <div className="modal-container">
      <div className="modal">
        <header className="modal-header">
          <h1>Pick a Day</h1>

          <button className="close-button" onClick={hideModal}>
            ✕
          </button>
        </header>

        <div className="modal-body">
          {segments.map((segment, index) => (
            <button
              className="picker-button"
              key={index}
              onClick={() => updateSegment(index - currentSegment)}
            >
              {`Week ${segment.week}, Day ${segment.day}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

PickerModal.propTypes = {
  segments: PropTypes.array.isRequired,
  currentSegment: PropTypes.number.isRequired,
  hideModal: PropTypes.func.isRequired,
  updateSegment: PropTypes.func.isRequired
};

export default PickerModal;
