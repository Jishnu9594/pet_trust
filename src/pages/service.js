import React, { Fragment } from "react";
import Menu from "../menu";
import { Link, useLocation } from "react-router-dom";
import Footer from "./footer";
function Service() {
  return (
    <Fragment>
      <>
        <Menu />
        <main>
          {/* Hero Area Start */}
          <div className="slider-area2 slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center pt-50">
                    <h2>Services</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Area End */}
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
                        <a href="#"> Department of Diagnostic Imaging</a>
                      </h5>
                      <p>
                        The Department of Diagnostic Imaging at Pet Trust
                        Hospital offers advanced imaging services, including
                        X-rays, ultrasounds, and MRIs, to accurately diagnose
                        and guide treatment for pets, ensuring optimal care and
                        recovery.
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
                        <a href="#">Department of Obstetrics and Gynecology</a>
                      </h5>
                      <p>
                        The Department of Obstetrics and Gynecology at Pet Trust
                        Hospital specializes in reproductive health, offering
                        services like prenatal care, delivery assistance, and
                        gynecological treatments, ensuring the well-being of
                        female pets.
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
                        <a href="#">Pet Dental Care And Treatment</a>
                      </h5>
                      <p>
                        At Pet Trust Hospital in Cochin, we offer comprehensive
                        Pet Dental Care and Treatment to maintain your pet's
                        oral health. Our services include routine check-ups,
                        teeth cleaning, and treatment for dental diseases,
                        ensuring your pet's comfort and well-being.
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
                        <a href="#"> Laboratory</a>
                      </h5>
                      <p>
                        At Pet Trust Hospital, our state-of-the-art Laboratory
                        provides comprehensive diagnostic testing for pets. With
                        advanced equipment and expert professionals, we offer
                        accurate results for blood work, urinalysis, tissue
                        analysis, and more to ensure timely diagnosis and
                        effective treatment for your pet's health.
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
                        <a href="#">Wellness Programs</a>
                      </h5>
                      <p>
                        At Pet Trust Hospital, our Wellness Programs are
                        designed to provide preventive care tailored to your
                        pet’s needs. These programs include routine check-ups,
                        vaccinations, dental care, and nutritional guidance,
                        ensuring your pet maintains optimal health and quality
                        of life at every stage. Our team is committed to
                        providing compassionate care to help your pet thrive.
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
                        <a href="#">Pet Nutrition</a>
                      </h5>
                      <p>
                        At Pet Trust Hospital, we understand that proper
                        nutrition is essential to your pet's overall health and
                        well-being. Our Pet Nutrition services include
                        personalized dietary plans tailored to your pet's
                        specific needs, age, breed, and medical conditions. We
                        provide expert advice on choosing the best food,
                        supplements, and feeding schedules to ensure your pet
                        enjoys a balanced diet for a long, healthy life.
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
        </main>
        <Footer />
        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt" />
          </a>
        </div>
        {/* JS here */}
        {/* Jquery, Popper, Bootstrap */}
        {/* Jquery Mobile Menu */}
        {/* Jquery Slick , Owl-Carousel Plugins */}
        {/* One Page, Animated-HeadLin */}
        {/* Nice-select, sticky */}
        {/* contact js */}
        {/* Jquery Plugins, main Jquery */}
      </>
    </Fragment>
  );
}

export default Service;
