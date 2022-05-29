import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import {
  stadium,
  khadok,
  champion,
  chill,
  teaTimee,
  bigStadium,
} from "../Constants/images";

const SliderThree = () => {
  return (
    <Slider>
      <SwiperSlide>
        <div className="txt-content">
          <p>
            Inspired by collegiate sporting events that draw hundreds of
            thousands of fans to games each year, hotels will be located on or
            near university campuses and will reflect a school’s heritage and
            pay tribute to the players, coaches, and fans that continue to keep
            the spirit alive.
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
        <img src={stadium} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={khadok} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={champion} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={chill} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={teaTimee} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bigStadium} alt="" />
      </SwiperSlide>
    </Slider>
  );
};

export default SliderThree;
