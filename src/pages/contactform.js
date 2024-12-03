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
        "http://127.0.0.1:8000/api/contact/submit/",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error.response.data);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="contact-form-main pb-top">
      <div className="container">
        <div className="row justify-content-md-end">
          <div className="col-xl-7 col-lg-7">
            <div className="form-wrapper">
              <div className="form-tittle">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="section-tittle section-tittle2 mb-70">
                      <h2>
                        Schedule Your Pet's Health Checkup with Pet Trust!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box email-icon mb-30">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="select-itms">
                      <select name="service" onChange={handleChange}>
                        <option value="">Select Service</option>
                        <option value="Health Law">Health Law</option>
                        <option value="Saiful Islam">Saiful Islam</option>
                        <option value="Arafath Miya">Arafath Miya</option>
                        <option value="Shakil Miya">Shakil Miya</option>
                        <option value="Tamim Sharker">Tamim Sharker</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box subject-icon mb-30">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box mb-30">
                      <label htmlFor="date">Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-box mb-30">
                      <label htmlFor="time">Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box message-icon mb-65">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="submit-info">
                      <button className="btn submit-btn2" type="submit">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="shape-dog">
                  <img src="assets/img/gallery/shape1.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="from-left d-none d-lg-block">
        <img src="assets/img/gallery/contact_form.png" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
