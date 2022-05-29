import React from "react";
import { logo } from "../Constants/images";

const Hero = () => {
  return (
    <section className="app__banner">
      <video
        src="https://sihos84dev.wpengine.com/wp-content/themes/blankslate/video/SI_Landing_01.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="app__banner-overlay">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="more__text">
          <div className="more__space">
            <a href="#about__section">
              More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
