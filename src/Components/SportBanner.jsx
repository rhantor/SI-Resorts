import React from "react";
import { sportBannerImg } from "../Constants/images";
import Banner from "./Banner";

const SportBanner = () => {
  return (
    <Banner title="SI ONCAMPUS" bigTitle="GET EXCITED" bgImg={sportBannerImg} />
  );
};

export default SportBanner;
