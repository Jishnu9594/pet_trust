import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppointmentPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleBookAppointment = () => {
    navigate("/contact-form");
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
              <button
                className="popup-book-btn"
                onClick={handleBookAppointment}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentPopup;
