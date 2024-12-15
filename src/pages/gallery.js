import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  const slides = [
    {
      image: "assets/img/pettrust1/P1210467.JPG",
      text: "This is a happy pet enjoying the sunshine!",
    },
    {
      image: "assets/img/pettrust1/P1210118.JPG",
      text: "A playful moment captured with our furry friends.",
    },
    {
      image: "assets/img/pettrust1/P1210421.JPG",
      text: "Our pets love to explore and make memories.",
    },
    {
      image: "assets/img/pettrust1/P1210349.JPG",
      text: "Comfort and care for every animal we serve.",
    },
    {
      image: "assets/img/pettrust1/P1210497.JPG",
      text: "A snapshot of unconditional love and trust.",
    },
    {
      image: "assets/img/pettrust1/P1210388.JPG",
      text: "Advanced ICU care prioritizing pets' recovery, comfort, and wellbeing.",
    },
    {
      image: "assets/img/pettrust1/P1210227.JPG",
      text: "The grooming section in a pet trust ensures pet care maintenance.",
    },
    {
      image: "assets/img/pettrust1/P1210397.JPG",
      text: "Modern diagnostics ensuring pets' health, safety, and happiness.",
    },
    {
      image: "assets/img/pettrust1/P1210483.JPG",
      text: "Comfort and care for every animal we serve.",
    },
    {
      image: "assets/img/pettrust1/P1210374.JPG",
      text: "Team coordination in a pet trust ensures efficient care and management.",
    },
    {
      image: "assets/img/pettrust1/P1210466.JPG",
      text: "Comfort and care for every animal we serve.",
    },
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Photo Gallery</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="gallery-slide">
            <div className="gallery-image-container">
              <img src={slide.image} alt={`Slide ${index}`} />
              <div className="hover-text">{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
