import React, { useState, useEffect } from "react";

const AppointmentPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleCallNow = () => {
    window.location.href = "tel:+916235806115";
  };

  return (
    <>
      {isPopupVisible && (
        <div className="glass-popup-overlay">
          <div className="glass-popup">
            <div className="glass-popup-header">
              <h2>Let’s Connect</h2>
            </div>
            <div className="glass-popup-body">
              <p>
                Have a question? Need assistance? Call us now and let us help
                you with your needs.
              </p>
            </div>
            <div className="glass-popup-actions">
              <button
                className="glass-popup-btn glass-close-btn"
                onClick={closePopup}
              >
                Close
              </button>
              <button
                className="glass-popup-btn glass-call-btn"
                onClick={handleCallNow}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentPopup;
