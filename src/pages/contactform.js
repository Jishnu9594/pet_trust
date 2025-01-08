import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });
  const [popupMessage, setPopupMessage] = useState(""); // State for the pop-up message
  const [showPopup, setShowPopup] = useState(false); // State to show/hide the pop-up

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://pettrust-backend-1wzw.onrender.com/pet/contact-form/",
        formData
      );
      setPopupMessage(response.data.message); // Set the success message
      setShowPopup(true); // Show the pop-up
    } catch (error) {
      console.error(error.response.data);
      setPopupMessage("Failed to submit form. Please try again."); // Set the error message
      setShowPopup(true); // Show the pop-up
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact-form-main pb-top">
      <div className="container">
        <div className="row justify-content-md-between">
          <div className="col-xl-5 col-lg-5">
            <div className="left-heading-wrapper">
              <h2 className="left-heading animate-heading">
                Book Your Pet's Health Checkup Today at Pet Trust Hospital!
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="form-wrapper">
              <h2 className="form-title animate-heading"></h2>

              {/* Note Section */}
              <p className="form-note">
                <strong>Note:</strong> Bookings through this form must be made
                at least 2 hours before the desired booking time to confirm your
                appointment. For urgent care, please walk in directly or call us
                at
                <a href="tel:+916235806115"> +91 6235806115</a>.
              </p>

              <form id="contact-form" onSubmit={handleSubmit}>
                {/* Form Fields */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select name="service" onChange={handleChange} required>
                    <option value="">Select Service</option>
                    <option value="Pet Treatment">Pet Treatment</option>
                    <option value="Vaccinations">Vaccinations</option>
                    <option value="Department of Surgery">
                      Department of Surgery
                    </option>
                    <option value="Department of Veterinary Medicine">
                      Department of Veterinary Medicine
                    </option>
                    <option value="Dog Grooming">Dog Grooming</option>
                    <option
                      value="
Department of Diagnostic Imaging"
                    >
                      Department of Diagnostic Imaging
                    </option>
                    <option
                      value="Department of Obstetrics and Gynecology
"
                    >
                      Department of Obstetrics and Gynecology
                    </option>
                    <option value="Pet Dental Care And Treatment in Cochin">
                      Pet Dental Care And Treatment
                    </option>
                    <option value="Laboratory">Laboratory</option>
                    <option value="Wellness Programs">Wellness Programs</option>
                    <option value="Pet Nutrition">Pet Nutrition</option>
                    <option value="Department of Interventional Radiography">
                      Department of Interventional Radiography
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-submit">
                  <button type="submit">Submit Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Message */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-message">{popupMessage}</div>
            <button onClick={closePopup} className="popup-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
