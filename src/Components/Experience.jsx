import React from "react";
import PagePathName from "./PagePathName";

const Experience = () => {
  return (
    <section id="exp_section">
      <div className="container-fluid experience">
        <div className="row">
          <div className="col-2 exp__left-wrapper">
            <PagePathName num={"02"} pageName="Experience" />
          </div>
          <div className="col-12 col-md-10 exp__right-wrapper">
            <div className="exp__content">
              <div className="exp__content-wrapper">
                <h3>
                  THE ULTIMATE DESTINATION FOR ACTIVE LIFESTYLES & SPORTS
                  ENTHUSIASTS
                </h3>
                <p>
                  Sports Illustrated Resorts aims to provide a vibrant,
                  exciting, and interactive experience that celebrates the
                  legacy of athletic achievements. Explore our different Sports
                  Illustrated Resorts categories: Beach & Resort, Experiences,
                  and OnCampus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
