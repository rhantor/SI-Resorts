import React from "react";
import PagePathName from "./PagePathName";

const Location = () => {
  return (
    <section id="location">
      <div className="container-fluid location ">
        <div className="row">
          <div className="col-2 exp__left-wrapper">
            <PagePathName num={"03"} pageName="Location" />
          </div>
          <div className="col-12 col-md-10 location__right-wrapper">
            <div className="location__content">
              <div className="location__big-title">
                <h1>
                  LIFE IS NOT <span>A SPECTATOR SPORT</span>
                </h1>
              </div>
              <div className="location__text">
                <p>
                  Sports Illustrated Resorts offers exclusive experiences that
                  only the most iconic and impactful name in sports can. Get
                  ready to explore Cap Cana, Orlando, and more locations coming
                  soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
