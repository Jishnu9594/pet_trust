import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  const slides = [
    {
      image: "assets/img/pettrust_optimized_img/P1210467.webp",
      text: "This is a happy pet enjoying the sunshine!",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210118.webp",
      text: "A playful moment captured with our furry friends.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210421.webp",
      text: "Our pets love to explore and make memories.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210349.webp",
      text: "Comfort and care for every animal we serve.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210497.webp",
      text: "A snapshot of unconditional love and trust.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210388.webp",
      text: "Advanced ICU care prioritizing pets' recovery, comfort, and wellbeing.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210227.webp",
      text: "The grooming section in a pet trust ensures pet care maintenance.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210397.webp",
      text: "Modern diagnostics ensuring pets' health, safety, and happiness.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210483.webp",
      text: "Comfort and care for every animal we serve.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210374.webp",
      text: "Team coordination in a pet trust ensures efficient care and management.",
    },
    {
      image: "assets/img/pettrust_optimized_img/P1210466.webp",
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
