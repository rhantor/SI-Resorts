import React from "react";
import { SwiperSlide } from "swiper/react";
import {
  orlando1,
  orlando2,
  orlando3,
  orlando4,
  orlando5,
} from "../Constants/images";
import GellarySlider from "./GellarySlider";

const Orlando = () => {
  const gellaryArr = [orlando1, orlando2, orlando3, orlando4, orlando5];
  return (
    <GellarySlider
      title={"ORLANDO"}
      titleText="
FLORIDA (OPENING 2024)"
    >
      {gellaryArr.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt="" />
        </SwiperSlide>
      ))}
    </GellarySlider>
  );
};

export default Orlando;
