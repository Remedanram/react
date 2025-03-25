import React from 'react';
import '../styles/Popup.css';

function Popup({ title, closePopup, confirmAction }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{title}</h3>
        <button onClick={confirmAction}>Yes, Delete</button>
        <button onClick={closePopup}>Cancel</button>
      </div>
    </div>
  );
}

export default Popup;
