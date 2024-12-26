import React from "react";
import BookAppointmentButton from "./ BookAppointmentButton";

const SliderArea = () => {
  return (
    <div className="slider-area">
      <div className="slider-active dot-style">
        {/* Slider Single */}
        <div className="single-slider d-flex align-items-center slider-height">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                {/* Video Icon */}
                <div className="video-icon">
                  <a
                    className="popup-video btn-icon"
                    href="https://youtu.be/tMH_3Hq3Bzo?si=zioeWELDYy4aZx8N"
                    aria-label="Play Video"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="hero__caption">
                  <h1>We Care Your Pets.</h1>
                  <p>
                    At Pet Trust Hospital, we provide expert care and attention
                    to your furry friends, ensuring they live happy and healthy
                    lives.
                  </p>
                  <BookAppointmentButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Single */}
      </div>
      {/* Slider Social */}
      <div className="button-text d-none d-md-block">
        <span>Scroll</span>
      </div>
    </div>
  );
};

export default SliderArea;
