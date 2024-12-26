import React, { Fragment } from "react";
import Menu from "../menu";
import ContactForm from "./contactform";
import BlogSection from "./blogindex";
import QuickFactors from "./quickfactors";
import AboutSection from "./aboutpage";
import { Link, useLocation } from "react-router-dom";
import { FaBullhorn, FaEye } from "react-icons/fa";
import { FaHeartbeat, FaUserMd, FaHandsHelping } from "react-icons/fa"; // Importing icons
import PetWellnessSection from "../wellness";
import TeamSection from "./team";
import Footer from "./footer";
function About() {
  return (
    <Fragment>
      <>
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Pet Trust </title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="site.webmanifest" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="assets/img/favicon.ico"
          />
          {/* CSS here */}
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="assets/css/slicknav.css" />
          <link rel="stylesheet" href="assets/css/flaticon.css" />
          <link rel="stylesheet" href="assets/css/animate.min.css" />
          <link rel="stylesheet" href="assets/css/magnific-popup.css" />
          <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
          <link rel="stylesheet" href="assets/css/themify-icons.css" />
          <link rel="stylesheet" href="assets/css/slick.css" />
          <link rel="stylesheet" href="assets/css/nice-select.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
        </>

        <Menu />
        <main>
          {/* Hero Area Start */}
          <div className="about-us-section">
            {/* Hero Section */}
            <div className="hero-section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 text-center">
                    <h2 className="hero-title">About Us</h2>
                  </div>
                </div>
              </div>
            </div>

            <AboutSection />

            {/* About Details */}
            <QuickFactors />
          </div>

          <div className="about-details section-padding">
            <h3 className="section-title text-center">Mission and Vision</h3>
            <br />
            <div className="container">
              <div className="about-inline-block-container">
                <div className="about-card">
                  <FaBullhorn className="about-icon" />
                  <h4 className="about-title">Our Mission</h4>
                  <p className="about-text">
                    At Pet Trust Hospital, our mission is to provide
                    compassionate, comprehensive, and high-quality care for all
                    pets. We are committed to enhancing the lives of pets and
                    their families by offering advanced medical treatment,
                    preventive care, and exceptional customer service. Our
                    dedicated team of veterinary professionals strives to ensure
                    the well-being of every pet, making their health our top
                    priority.
                  </p>
                </div>
                <div className="about-card">
                  <FaEye className="about-icon" />
                  <h4 className="about-title">Our Vision</h4>
                  <p className="about-text">
                    We established the Pet Trust hospital so that every animal
                    companion in Kerala can access quality medical treatment. We
                    aim to become a center of advanced medical care and the best
                    pet hospital in Kerala. With state-of-the-art facilities
                    such as diagnostic labs and equipment and the expertise of
                    specialized veterinarians, internists, anesthesiologists,
                    and oncologists, we are on the path to realizing our vision.
                    We know the importance of timely intervention in pet health
                    care and we want to educate every owner to become
                    responsible companions for pets. We aim to become the
                    largest chain of veterinary hospitals in India.
                  </p>
                </div>
                <div className="about-card">
                  <FaHandsHelping className="about-icon" />
                  <h4 className="about-title">Our Values</h4>
                  <p className="about-text">
                    At Pet Trust Hospital, we uphold the values of compassion,
                    integrity, respect, and excellence. We believe in treating
                    every pet with the utmost care and respect, creating a
                    culture of trust and understanding with both pets and their
                    families. Our values guide every decision we make and drive
                    us to provide the highest level of care while maintaining a
                    positive and nurturing environment for all.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Details End */}
          {/*? About Area Start*/}
          <div className="about-area fix">
            {/*Right Contents  */}
            <div className="about-img">
              <div className="info-man text-center">
                <div className="head-cap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="28px"
                    height="39px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M24.000,19.000 C21.791,19.000 20.000,17.209 20.000,15.000 C20.000,12.790 21.791,11.000 24.000,11.000 C26.209,11.000 28.000,12.790 28.000,15.000 C28.000,17.209 26.209,19.000 24.000,19.000 ZM24.000,8.000 C21.791,8.000 20.000,6.209 20.000,4.000 C20.000,1.790 21.791,-0.001 24.000,-0.001 C26.209,-0.001 28.000,1.790 28.000,4.000 C28.000,6.209 26.209,8.000 24.000,8.000 ZM14.000,38.999 C11.791,38.999 10.000,37.209 10.000,35.000 C10.000,32.791 11.791,31.000 14.000,31.000 C16.209,31.000 18.000,32.791 18.000,35.000 C18.000,37.209 16.209,38.999 14.000,38.999 ZM14.000,29.000 C11.791,29.000 10.000,27.209 10.000,25.000 C10.000,22.791 11.791,21.000 14.000,21.000 C16.209,21.000 18.000,22.791 18.000,25.000 C18.000,27.209 16.209,29.000 14.000,29.000 ZM14.000,19.000 C11.791,19.000 10.000,17.209 10.000,15.000 C10.000,12.790 11.791,11.000 14.000,11.000 C16.209,11.000 18.000,12.790 18.000,15.000 C18.000,17.209 16.209,19.000 14.000,19.000 ZM14.000,8.000 C11.791,8.000 10.000,6.209 10.000,4.000 C10.000,1.790 11.791,-0.001 14.000,-0.001 C16.209,-0.001 18.000,1.790 18.000,4.000 C18.000,6.209 16.209,8.000 14.000,8.000 ZM4.000,29.000 C1.791,29.000 -0.000,27.209 -0.000,25.000 C-0.000,22.791 1.791,21.000 4.000,21.000 C6.209,21.000 8.000,22.791 8.000,25.000 C8.000,27.209 6.209,29.000 4.000,29.000 ZM4.000,19.000 C1.791,19.000 -0.000,17.209 -0.000,15.000 C-0.000,12.790 1.791,11.000 4.000,11.000 C6.209,11.000 8.000,12.790 8.000,15.000 C8.000,17.209 6.209,19.000 4.000,19.000 ZM4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.790 1.791,-0.001 4.000,-0.001 C6.209,-0.001 8.000,1.790 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 ZM24.000,21.000 C26.209,21.000 28.000,22.791 28.000,25.000 C28.000,27.209 26.209,29.000 24.000,29.000 C21.791,29.000 20.000,27.209 20.000,25.000 C20.000,22.791 21.791,21.000 24.000,21.000 Z"
                    />
                  </svg>
                  <h3>5+</h3>
                </div>
                <p>
                  Years
                  <br />
                  of Excellence
                </p>
              </div>
              <div className="info-man info-man2 text-center">
                <div className="head-cap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="28px"
                    height="39px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M24.000,19.000 C21.791,19.000 20.000,17.209 20.000,15.000 C20.000,12.790 21.791,11.000 24.000,11.000 C26.209,11.000 28.000,12.790 28.000,15.000 C28.000,17.209 26.209,19.000 24.000,19.000 ZM24.000,8.000 C21.791,8.000 20.000,6.209 20.000,4.000 C20.000,1.790 21.791,-0.001 24.000,-0.001 C26.209,-0.001 28.000,1.790 28.000,4.000 C28.000,6.209 26.209,8.000 24.000,8.000 ZM14.000,38.999 C11.791,38.999 10.000,37.209 10.000,35.000 C10.000,32.791 11.791,31.000 14.000,31.000 C16.209,31.000 18.000,32.791 18.000,35.000 C18.000,37.209 16.209,38.999 14.000,38.999 ZM14.000,29.000 C11.791,29.000 10.000,27.209 10.000,25.000 C10.000,22.791 11.791,21.000 14.000,21.000 C16.209,21.000 18.000,22.791 18.000,25.000 C18.000,27.209 16.209,29.000 14.000,29.000 ZM14.000,19.000 C11.791,19.000 10.000,17.209 10.000,15.000 C10.000,12.790 11.791,11.000 14.000,11.000 C16.209,11.000 18.000,12.790 18.000,15.000 C18.000,17.209 16.209,19.000 14.000,19.000 ZM14.000,8.000 C11.791,8.000 10.000,6.209 10.000,4.000 C10.000,1.790 11.791,-0.001 14.000,-0.001 C16.209,-0.001 18.000,1.790 18.000,4.000 C18.000,6.209 16.209,8.000 14.000,8.000 ZM4.000,29.000 C1.791,29.000 -0.000,27.209 -0.000,25.000 C-0.000,22.791 1.791,21.000 4.000,21.000 C6.209,21.000 8.000,22.791 8.000,25.000 C8.000,27.209 6.209,29.000 4.000,29.000 ZM4.000,19.000 C1.791,19.000 -0.000,17.209 -0.000,15.000 C-0.000,12.790 1.791,11.000 4.000,11.000 C6.209,11.000 8.000,12.790 8.000,15.000 C8.000,17.209 6.209,19.000 4.000,19.000 ZM4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.790 1.791,-0.001 4.000,-0.001 C6.209,-0.001 8.000,1.790 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 ZM24.000,21.000 C26.209,21.000 28.000,22.791 28.000,25.000 C28.000,27.209 26.209,29.000 24.000,29.000 C21.791,29.000 20.000,27.209 20.000,25.000 C20.000,22.791 21.791,21.000 24.000,21.000 Z"
                    />
                  </svg>
                  <h3>4</h3>
                </div>
                <p>
                  Specialty
                  <br />
                  Clinics
                </p>
              </div>
            </div>
            {/* left Contents */}
            <div className="about-details">
              <div className="right-caption">
                {/* Section Tittle */}
                <div className="section-tittle mb-50">
                  <h2>
                    We are committed to providing the best care for your pets
                    <br />
                  </h2>
                </div>
                <div className="about-more">
                  <p className="pera-top">
                    From routine check-ups to specialized treatments, we are
                    dedicated to meeting all of your pet's needs with
                    professionalism and care.
                  </p>
                  <p className="mb-65 pera-bottom">
                    At Pet Trust Hospital, we prioritize your pet's health and
                    well-being with compassionate, expert care. Our team of
                    experienced veterinarians and staff offer a wide range of
                    medical, surgical, and wellness services to ensure your
                    furry friends live a long, healthy life.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* About Area End*/}
          {/*? Team Start */}
          <TeamSection />
          {/* Team End */}
          {/*? Contact form Start */}
          <ContactForm />

          {/* Contact form End */}
          {/*? Blog start */}
          <BlogSection />
          {/* Blog End */}
          {/*? contact-animal-owner Start */}
          <div
            className="contact-animal-owner section-bg"
            data-background="assets/img/gallery/section_bg04.png"
            style={{
              backgroundImage: 'url("assets/img/gallery/section_bg04.png")',
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="contact_text text-center">
                    <div className="section_title text-center">
                      <h3>Anytime, You Can Reach Us!</h3>
                      <p>
                        At Pet Trust Hospital, we understand that your pet’s
                        health is priceless. That’s why our expert team is
                        available around the clock to provide care and support
                        whenever you need it. Whether it's an emergency or a
                        routine check-up, we’re here for your pet, ensuring they
                        receive the attention and treatment they deserve—24/7.
                      </p>
                    </div>
                    <div className="contact_btn d-flex align-items-center justify-content-center">
                      <a href="tel:+916235806115" className="btn white-btn">
                        Contact Us
                      </a>
                      <p>
                        Or <a href="tel:+916235806115">+91 6235806115</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact-animal-owner End */}

          <PetWellnessSection />
        </main>
        <Footer />
        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt" />
          </a>
        </div>

        <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="./assets/js/popper.min.js"></script>
        <script src="./assets/js/bootstrap.min.js"></script>

        <script src="./assets/js/jquery.slicknav.min.js"></script>

        <script src="./assets/js/owl.carousel.min.js"></script>
        <script src="./assets/js/slick.min.js"></script>

        <script src="./assets/js/wow.min.js"></script>
        <script src="./assets/js/animated.headline.js"></script>
        <script src="./assets/js/jquery.magnific-popup.js"></script>

        <script src="./assets/js/jquery.nice-select.min.js"></script>
        <script src="./assets/js/jquery.sticky.js"></script>

        <script src="./assets/js/contact.js"></script>
        <script src="./assets/js/jquery.form.js"></script>
        <script src="./assets/js/jquery.validate.min.js"></script>
        <script src="./assets/js/mail-script.js"></script>
        <script src="./assets/js/jquery.ajaxchimp.min.js"></script>

        <script src="./assets/js/plugins.js"></script>
        <script src="./assets/js/main.js"></script>
      </>
    </Fragment>
  );
}

export default About;
