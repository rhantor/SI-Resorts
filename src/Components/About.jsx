import React from "react";
import { homePage1, homePage2, homePage3 } from "../Constants/images";
import PagePathName from "./PagePathName";

const About = () => {
  return (
    <section id="about__section">
      <div className="container league_for_leisure">
        <div className="row">
          <PagePathName num="01" pageName="About" />
          <div className="col-12 col-md-10 d-flex align-items-center big__title">
            <h1 className="display-2">
              WELCOME TO THE NEW <span>LEAGUE OF LEISURE</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="container showcase">
        <div className="row">
          <div className="col-12 col-md-4  left_img d-flex align-items-center">
            <img src={homePage2} alt="" />
          </div>
          <div className="col-12 col-md-8 pb-4">
            <div className="row in-row">
              <div className="col-12 pt-0 p-4 pe-md-0">
                <img src={homePage1} alt="" />
              </div>
              <div className="col-12 p-4 pt-md-0 pe-md-0 ">
                <img src={homePage3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
