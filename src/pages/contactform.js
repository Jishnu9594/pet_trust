import axios from "axios";
import React, { useState } from "react";

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
        "http://127.0.0.1:8000/pet/contact-form/",
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
              <form id="contact-form" onSubmit={handleSubmit}>
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
                    <option value="Health Law">Health Law</option>
                    <option value="Saiful Islam">Saiful Islam</option>
                    <option value="Arafath Miya">Arafath Miya</option>
                    <option value="Shakil Miya">Shakil Miya</option>
                    <option value="Tamim Sharker">Tamim Sharker</option>
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
