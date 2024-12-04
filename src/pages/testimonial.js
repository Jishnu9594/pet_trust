import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials from Django backend
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/pet/testimonials/"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      }
    };
    fetchTestimonials();
  }, []);

  // Settings for Slick Slider with autoplay
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 3000, // Set the time for each slide (in milliseconds)
    pauseOnHover: true, // Pause the autoplay when hovering over the slider
  };

  return (
    <div
      className="testimonial-area testimonial-padding section-bg"
      style={{
        backgroundImage: 'url("assets/img/gallery/section_bg03.png")',
      }}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-10">
            {/* Heading for the Testimonial Slider */}
            <h2 className="testimonial-heading text-center">
              Our Testimonials
            </h2>

            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="single-testimonial text-center">
                  <div className="testimonial-caption">
                    <div className="testimonial-founder">
                      <div className="founder-img mb-40">
                        <img
                          src={
                            testimonial.image_url ||
                            "assets/img/gallery/testi-logo.png"
                          }
                          alt=""
                        />
                        <span>{testimonial.name}</span>
                        <p>{testimonial.title}</p>
                      </div>
                    </div>
                    <div className="testimonial-top-cap">
                      <p>{testimonial.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
