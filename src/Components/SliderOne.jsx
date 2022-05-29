import React from "react";
import Slider from "./Slider";
import { boatImg, slideImg2, slideImg3, slideImg4 } from "../Constants/images";
import { SwiperSlide } from "swiper/react";
const SliderOne = () => {
  return (
    <Slider>
      <SwiperSlide>
        <div className="txt-content">
          <p>
            Our surf, sun, and sand lifestyle properties will be focused on
            vacations set in some of the world’s most beautiful environments and
            will feature amenities such as SI Beach Clubs, swim-up bars, spa and
            wellness, and a variety of family-friendly watersport activities.
          </p>

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
      </SwiperSlide>
      <SwiperSlide>
        <img src={boatImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideImg4} alt="" />
      </SwiperSlide>
    </Slider>
  );
};

export default SliderOne;
