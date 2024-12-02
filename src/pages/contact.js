import React, { Fragment } from "react";
import Menu from "../menu";

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
              <div className="col-lg-8">
                <form
                  className="form-contact contact_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control w-100"
                          name="message"
                          id="message"
                          cols={30}
                          rows={9}
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Message'"
                          placeholder=" Enter Message"
                          defaultValue={""}
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
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter your name'"
                          placeholder="Enter your name"
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
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email address'"
                          placeholder="Email"
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
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Subject'"
                          placeholder="Enter Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      className="button button-contactForm boxed-btn"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-home" />
                  </span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-tablet" />
                  </span>
                  <div className="media-body">
                    <h3>+1 253 565 2365</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon">
                    <i className="ti-email" />
                  </span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================ contact section end ================= */}
        <footer>
          {/* Footer Start*/}
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      {/* logo */}
                      <div className="footer-logo mb-25">
                        <a href="index.html">
                          <img src="assets/img/logo/logo2_footer.png" alt="" />
                        </a>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p>
                            Lorem ipsum dolor sit amet, adipiscing elit, sed do
                            eiusmod tempor elit.{" "}
                          </p>
                        </div>
                      </div>
                      {/* social */}
                      <div className="footer-social">
                        <a href="https://www.facebook.com/sai4ull">
                          <i className="fab fa-facebook-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-square" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Company</h4>
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="single-blog.html">Services</a>
                        </li>
                        <li>
                          <a href="#">Cases</a>
                        </li>
                        <li>
                          <a href="contact.html"> Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Services</h4>
                      <ul>
                        <li>
                          <a href="#">Commercial Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Office Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Building Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Floor Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Apartment Cleaning</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Get in Touch</h4>
                      <ul>
                        <li>
                          <a href="#">152-515-6565</a>
                        </li>
                        <li>
                          <a href="#"> Demomail@gmail.com</a>
                        </li>
                        <li>
                          <a href="#">New Orleans, USA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer-bottom area */}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made
                        with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End*/}
        </footer>
      </>
    </Fragment>
  );
}

export default Contact;
