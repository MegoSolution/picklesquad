import React from 'react';
import ECardDisplay from './ECardDisplay';

const ECardModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <ECardDisplay />
      </div>
    </div>
  );
};

export default ECardModal;