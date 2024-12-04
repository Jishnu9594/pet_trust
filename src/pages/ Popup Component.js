import React, { useState, useEffect } from "react";

const AppointmentPopup = () => {
  // State to manage whether the popup is visible or not
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // useEffect hook to display popup on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true); // Show the popup after the page has loaded
    }, 1000); // 1000ms delay (adjust as needed)

    // Cleanup timeout if the component unmounts or popup is closed
    return () => clearTimeout(timer);
  }, []);

  // Close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-message">
              <h2>Book an Appointment</h2>
              <p>We would love to assist you! Please book an appointment.</p>
            </div>
            <div className="popup-actions">
              <button className="popup-close-btn" onClick={closePopup}>
                Close
              </button>
              <button className="popup-book-btn">Book Appointment</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentPopup;
