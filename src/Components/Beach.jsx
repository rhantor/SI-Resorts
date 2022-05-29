import React from "react";
import { seaImg } from "../Constants/images";
import Banner from "./Banner";

const Beach = () => {
  return (
    <Banner
      title="SI BEACH & RESORT"
      bigTitle="GET ADVENTUROUS"
      bgImg={seaImg}
    />
  );
};

export default Beach;
