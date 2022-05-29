import React from "react";
import { Pagination } from "swiper";
import {Swiper } from "swiper/react";


const GellarySlider = ({ children, title, titleText }) => {
  return (
    <section id="gellary__Slide">
      <div className="container-fluid pb-4 p-0">
        <div className="row contain mb-4">
          <div className="col-0 col-md-1"></div>
          <div className="col-12 col-md-10">
            <div className=" slide__title ">
              <h5>{title}</h5>
              <p>{titleText}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="83.5"
              height="7.299"
              viewBox="0 0 83.5 7.299"
              className="arrow-svg"
            >
              <g
                id="Group_222"
                data-name="Group 222"
                transform="translate(-477.961 -4923.049)"
              >
                <path
                  id="Path_3256"
                  data-name="Path 3256"
                  d="M.332,6.079c-.434,0-.385-.488-.179-.846l3.076-5a.481.481,0,0,1,.66-.163.476.476,0,0,1,.163.163l3.1,5c.231.358.206.846-.231.846Z"
                  transform="translate(561.461 4923.049) rotate(90)"
                  fill="#fff"
                ></path>
                <line
                  id="Line_12"
                  data-name="Line 12"
                  x1="80.539"
                  transform="translate(477.961 4926.698)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                ></line>
              </g>
            </svg>
          </div>
        </div>

        <Swiper
          breakpoints={{
            // when window width is >= 640px
            240: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: window.innerWidth - 280,
              slidesPerView: 1.5,
            },
          }}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {children}
        </Swiper>
      </div>
    </section>
  );
};

export default GellarySlider;
