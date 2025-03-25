import { useEffect } from 'react';

function Popup({ tittle, closePopup }) {
  useEffect(() => {
    window.alert(tittle);
    // Auto-close the popup after the alert appears.
    closePopup();
  }, [tittle, closePopup]);

  return (
    <div className="popup">
      <h3>{tittle}</h3>
      <button onClick={closePopup}>Close</button>
    </div>
  );
}

export default Popup;
