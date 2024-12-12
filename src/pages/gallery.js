import React from "react";

const Gallery = () => {
  return (
    <div className="gallery-area section-padding30">
      <div className="container fix">
        <div className="row justify-content-sm-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            {/* Section Tittle */}
            <div className="section-tittle text-center mb-70">
              <span>Our Recent Photos</span>
              <h2>Photo Gallery</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="gallery-grid">
            {/* Gallery items */}
            <div className="single-gallery mb-30">
              <div
                className="gallery-img size-img"
                style={{
                  backgroundImage: "url(assets/img/pettrust1/P1210335.JPG)",
                }}
              >
                <div className="overlay-text">Veterinary Care</div>
              </div>
            </div>
            <div className="single-gallery mb-30">
              <div
                className="gallery-img size-img"
                style={{
                  backgroundImage: "url(assets/img/pettrust1/P1210118.JPG)",
                }}
              >
                <div className="overlay-text">Happy Pet Moments</div>
              </div>
            </div>
            <div className="single-gallery mb-30">
              <div
                className="gallery-img size-img"
                style={{
                  backgroundImage: "url(assets/img/pettrust1/P1210421.JPG)",
                }}
              >
                <div className="overlay-text">Pet Playtime</div>
              </div>
            </div>
            <div className="single-gallery mb-30">
              <div
                className="gallery-img size-img"
                style={{
                  backgroundImage: "url(assets/img/pettrust1/P1210081.JPG)",
                }}
              >
                <div className="overlay-text">Clinic Visit</div>
              </div>
            </div>
            <div className="single-gallery mb-30">
              <div
                className="gallery-img size-img"
                style={{
                  backgroundImage: "url(assets/img/pettrust1/P1210497.JPG)",
                }}
              >
                <div className="overlay-text">Playful Puppies</div>
              </div>
            </div>
            <div className="single-gallery mb-30">
              <div
                className="gallery-img size-img"
                style={{
                  backgroundImage: "url(assets/img/pettrust1/P1210388.JPG)",
                }}
              >
                <div className="overlay-text">Pet Wellness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
