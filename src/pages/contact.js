import React, { Fragment } from "react";
import Menu from "../menu";
import { Link, useLocation } from "react-router-dom";
import GetForm from "./getintouch";
import Footer from "./footer";

function Contact() {
  return (
    <Fragment>
      <>
        <Menu />
        {/* Hero Area Start */}
        <div className="slider-area2 slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center pt-50">
                  <h2>Contact US</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
        {/* ================ contact section start ================= */}
        <section className="contact-section">
          <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.5528837270654!2d76.339267774146!3d10.024468090082172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c5e4a47a303%3A0x5d0ef0df9a9b89a3!2sPET%20TRUST%20-%20Pet%20Hospital%20Kochi%2C%20Veterinary%20Hospital%20Kochi%2C%20Pet%20Clinic%20Kochi%2C%20Veterinary%20Doctor%20Kochi!5e1!3m2!1sen!2sin!4v1732776706683!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <GetForm />
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home" />
                  </span>
                  <div className="media-body">
                    <h3>
                      14/989, NGO Quarters – Mavelipuram Rd, Thrikkakara,
                      Kakkanad, Kerala 682030
                    </h3>
                    <p></p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet" />
                  </span>
                  <div className="media-body">
                    <h3>+91 6235806114 +91 6235806115</h3>
                    <p>Mon to Sat 8.00 am – 9.00 pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email" />
                  </span>
                  <div className="media-body">
                    <h3>info@pettrust.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    </Fragment>
  );
}

export default Contact;
