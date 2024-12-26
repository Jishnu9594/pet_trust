import React, { useState, useEffect } from "react";
import axios from "axios";

function GetForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // For showing a loading state
  const [error, setError] = useState(null); // For showing error messages
  const [success, setSuccess] = useState(null); // For showing success messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "https://pettrust-backend-1wzw.onrender.com/pet/api/get-in-touch/", // Replace with your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccess("Thank you for reaching out! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        }); // Reset form
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "There was an error submitting the form. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 3000); // Pop-up disappears after 3 seconds
      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [success, error]);

  return (
    <div className="col-lg-8">
      <form className="form-contact contact_form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control w-100"
                name="message"
                id="message"
                cols={30}
                rows={9}
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control valid"
                name="name"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control valid"
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control"
                name="subject"
                id="subject"
                type="text"
                placeholder="Enter Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {loading && <p>Sending...</p>}
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <div className="form-group mt-3">
          <button
            type="submit"
            className="button button-contactForm boxed-btn"
            disabled={loading}
          >
            Send
          </button>
        </div>
      </form>

      {(success || error) && (
        <div
          className={`pop-message ${
            success
              ? "pop-message-success show-pop"
              : "pop-message-error show-pop"
          }`}
        >
          {success || error}
        </div>
      )}
    </div>
  );
}

export default GetForm;
