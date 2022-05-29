import React from "react";
import { logo, redLogo } from "../Constants/images";

const Footer = () => {
  return (
    <footer>
      <div className="footer__red-logo pb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex red__logo-wrapper ">
              <div className="red-logo py-4">
                <img src={redLogo} alt="" />
              </div>
              <div className="coming-soon-text my-4 py-2">
                <span className="p-2">COMING SOON</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sports__info">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pb-3 pb-md-0">
              <span className="sub-title white">
                DON’T SIT ON THE SIDELINES
              </span>
              <p className="white">
                Sports Illustrated Resorts is taking over the playing-field.
                Reach out to get in on the action.
              </p>
            </div>
            <div className="col-md-4">
              <a className="btn white-btn  hamburger" href="#info">
                Get Info
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main__footer">
        <div className="container">
          <div className="row">
            <div className="col-12 sm-logo">
              <img src={logo} alt="" />
            </div>
            <div className="divider" />
            <div className="col-12 footer-content">
              <div className="footer-links">
                <a href="#privacy">PRIVACY POLICY</a>
                <a href="#terms">TERMS OF USE</a>
              </div>

              <p>
                ©2022 ABG-SI LLC. SPORTS ILLUSTRATED IS A REGISTERED TRADEMARK
                OF ABG-SI LLC. ALL RIGHTS RESERVED. USE OF THIS SITE CONSTITUTES
                ACCEPTANCE OF OUR TERMS OF USE AND PRIVACY POLICY
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
