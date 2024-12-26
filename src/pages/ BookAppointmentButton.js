import React from "react";
import { useNavigate } from "react-router-dom";

const BookAppointmentButton = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBookAppointment = () => {
    navigate("/contact-form"); // Navigate to the contact form page
  };

  return (
    <a
      href="#"
      className="hero-btn book-btn"
      data-animation="fadeInLeft"
      data-delay=".3s"
      onClick={handleBookAppointment} // Attach the onClick handler here
    >
      Book Now
      <i className="ti-calendar" />
    </a>
  );
};

export default BookAppointmentButton;
