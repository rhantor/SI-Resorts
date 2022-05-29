import React from "react";
import { Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ children }) => {
  return (
    <section className="slider">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          990: {
            slidesPerView: 2,
          },
        }}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </section>
  );
};

export default Slider;
