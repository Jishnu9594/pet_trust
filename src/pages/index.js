import React, { Fragment } from "react";
import Menu from "../menu";
import ContactForm from "./contactform";
import TestimonialSlider from "./testimonial";
import BlogSection from "./blogindex";
import AppointmentPopup from "./ Popup Component";
import BookAppointmentButton from "./ BookAppointmentButton";
import Gallery from "./gallery";
import PetCareSection from "../exploremoreindx";
import { Link, useLocation } from "react-router-dom";
import WellnessExam from "../wellness";
import TeamSection from "./team";
import Footer from "./footer";
import SliderArea from "./sliderhome";

function Index() {
  return (
    <Fragment>
      <>
        {/* Preloader Start */}

        <Menu />
        <AppointmentPopup />

        <main>
          {/*? Slider Area Start*/}
          <SliderArea />
          {/* Slider Area End */}
          {/*? Our Services Start */}
          <div className="our-services section-padding30">
            <div className="container">
              <div className="row justify-content-sm-center">
                <div className="cl-xl-7 col-lg-8 col-md-10">
                  {/* Section Tittle */}
                  <div className="section-tittle text-center mb-70">
                    <span>Our Professional Services</span>
                    <h2>Best Pet Care Services</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className=" col-lg-4 col-md-6 col-sm-6">
                  <div className="single-services text-center mb-30">
                    <div className="services-ion">
                      <span className="flaticon-animals" />
                    </div>
                    <div className="services-cap">
                      <h5>
                        <a href="#">Pet Treatment</a>
                      </h5>
                      <p>
                        Pet Trust Hospital provides expert pet treatment with
                        advanced medical care, compassionate veterinarians, and
                        state-of-the-art facilities, ensuring your beloved pets
                        receive the best attention for their health and
                        well-being.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-6">
                  <div className="single-services text-center mb-30">
                    <div className="services-ion">
                      <span className="flaticon-animals-1" />
                    </div>
                    <div className="services-cap">
                      <h5>
                        <a href="#">Dog grooming</a>
                      </h5>
                      <p>
                        Dog grooming at Pet Trust Hospital ensures your pet's
                        hygiene and comfort. Services include bathing, hair
                        trimming, nail clipping, ear cleaning, and styling,
                        performed by skilled groomers in a calm, pet-friendly
                        setting. Tailored to each dog's needs, grooming promotes
                        health, cleanliness, and a happy, refreshed appearance
                        for your furry friend.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-6">
                  <div className="single-services text-center mb-30">
                    <div className="services-ion">
                      <span className="flaticon-animals-1" />
                    </div>
                    <div className="services-cap">
                      <h5>
                        <a href="#">Vaccinations</a>
                      </h5>
                      <p>
                        Pet Trust Hospital offers essential pet vaccinations to
                        protect your furry friends from diseases, ensuring their
                        long-term health with expert care and personalized
                        vaccination plans tailored to your pet's needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-6">
                  <div className="single-services text-center mb-30">
                    <div className="services-ion">
                      <span className="flaticon-animals-1" />
                    </div>
                    <div className="services-cap">
                      <h5>
                        <a href="#">Department of Surgery</a>
                      </h5>
                      <p>
                        Department of Surgery at Pet Trust Hospital provides
                        advanced surgical care for pets, including routine
                        procedures and complex operations, ensuring your pet’s
                        health with precision, expertise, and compassionate
                        support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" col-lg-4 col-md-6 col-sm-6">
                  <div className="single-services text-center mb-30">
                    <div className="services-ion">
                      <span className="flaticon-animals-1" />
                    </div>
                    <div className="services-cap">
                      <h5>
                        <a href="#">Department of Veterinary Medicine</a>
                      </h5>
                      <p>
                        Department of Veterinary Medicine at Pet Trust Hospital
                        offers comprehensive medical care, from diagnostics to
                        treatment plans, ensuring pets receive expert attention
                        for illnesses, preventive care, and overall wellness.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" col-lg-4 col-md-6 col-sm-6">
                  <div className="single-services text-center mb-30">
                    <div className="services-ion">
                      <span className="flaticon-animals-1" />
                    </div>
                    <div className="services-cap">
                      <h5>
                        <a href="#">Department of Interventional Radiography</a>
                      </h5>
                      <p>
                        Department of Interventional Radiography at Pet Trust
                        Hospital provides advanced imaging and minimally
                        invasive procedures, enabling precise diagnostics and
                        treatments to improve your pet's health and recovery
                        outcomes effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Services End */}
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
                  <h3>10000+</h3>
                </div>
                <p>
                  Happy
                  <br />
                  Pet Families
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
                  <h3>12+</h3>
                </div>
                <p>
                  Veterinary
                  <br />
                  Experts
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
          {/*? Gallery Area Start */}
          <Gallery />
          {/* Gallery Area End */}
          {/*? Contact form Start */}

          <ContactForm />

          {/* Contact form End */}
          {/*? Team Start */}
          <TeamSection />

          {/* Team End */}
          {/*? Testimonial Start */}
          <TestimonialSlider />

          {/* Testimonial End */}
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
          <PetCareSection />
        </main>
        <Footer />
        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt" />
          </a>
        </div>
      </>
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
    </Fragment>
  );
}

export default Index;
