import React from "react";

const AboutSection = () => {
  return (
    <section id="introSection" className="intro-section">
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="intro-title">Welcome to Pet Trust Hospital</h1>
          <p className="intro-description">
            At Pet Trust Hospital, we are dedicated to providing exceptional
            veterinary care tailored to meet the unique needs of your pets. With
            a focus on advanced medical treatments and preventive care, we
            ensure your pets lead healthy and happy lives.
          </p>
          <p className="intro-description">
            Our experienced team of veterinary professionals is committed to
            delivering compassionate and comprehensive care. We believe in
            fostering a supportive and welcoming environment for pets and their
            families.
          </p>
          <p className="intro-description">
            Trust Pet Trust Hospital to set a new standard in pet care,
            combining innovation, personalized attention, and state-of-the-art
            facilities to ensure the best outcomes for your beloved pets.
          </p>
        </div>
        <div className="intro-image">
          <img
            src="assets/img/pettrust_optimized_img/pettrusthospital.webp"
            alt="Pet Trust Hospital"
            className="hospital-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
