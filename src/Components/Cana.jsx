import React from "react";
import GellarySlider from "./GellarySlider";
import {
  cana1,
  cana2,
  cana3,
  cana4,
  cana5,
  cana6,
  cana7,
  cana8,
  cana9,
  cana10,
} from "../Constants/images";
import { SwiperSlide } from "swiper/react";

const Cana = () => {
  const gellaryArr = [
    cana1,
    cana2,
    cana3,
    cana4,
    cana5,
    cana6,
    cana7,
    cana8,
    cana9,
    cana10,
  ];
  return (
    <GellarySlider
      title={"CAP CANA"}
      titleText="OMINICAN REPUBLIC (OPENING LATE 2022)"
    >
      {gellaryArr.map((img, i) => (
        <SwiperSlide key={i}>
          {" "}
          <img src={img} alt="" />
        </SwiperSlide>
      ))}
    </GellarySlider>
  );
};

export default Cana;
