import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  childImg,
  coupleImg,
  groundImg,
  poolImg,
  womenImg,
} from "../Constants/images";
import Slider from "./Slider";

const SliderTwo = () => {
  return (
    <Slider>
      <SwiperSlide>
        <div className="txt-content">
          <p>
            Featuring interactive sports adventure at the core of its offering,
            Sports Illustrated Experience locations are designed to appeal to
            families seeking a fun-filled, active vacation. Experiences may
            include golf courses, youth sports complexes, and SI Adventure
            Parks.
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
        <img src={groundImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={womenImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={coupleImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={childImg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={poolImg} alt="" />
      </SwiperSlide>
    </Slider>
  );
};

export default SliderTwo;
