import React from "react";

const Banner = ({ title, bigTitle, bgImg }) => {
  return (
    <section className="banner-hero" style={{ background: `url('${bgImg}')` }}>
      <div className="container-fluid p-0">
        <div className="beach__overlay p-4">
          <div className="beach__content">
            <h6>{title}</h6>

            <h1>{bigTitle}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
