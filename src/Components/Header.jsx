import React, { useRef, useState } from "react";

import { logo, redLogo } from "../Constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import Input from "./Input";
const Header = () => {
  const [sendBtn, setSendBtn] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const navbar__list = useRef();
  const getInfo_active = useRef();

  const activeMenu = () => {
    navbar__list.current.classList.toggle("toggle__menu-active");
  };
  const getInfo = () => {
    getInfo_active.current.classList.add("active");
    window.scrollTo(0, 0);
  };
  window.addEventListener("scroll", () => {
    let navBar = document.querySelector("header");
    let windowScroll = window.scrollY > 100;
    windowScroll ? setScrolling(true) : setScrolling(false);
    navBar.classList.toggle("scrolling-nav", windowScroll);
  });
  return (
    <>
      <header className="main__header">
        <div className="container d-flex justify-content-between align-items-center  p-2">
          <div className="navbar__brand">
            <img src={scrolling ? redLogo : logo} alt="" />
          </div>

          <div className="toggle__menu">
            <GiHamburgerMenu onClick={activeMenu} />
          </div>
          <ul className="navbar__list" ref={navbar__list}>
            <li className="nav__list-item">
              {" "}
              <a href="#exp_section">Experience</a>
            </li>
            <li className="nav__list-item">
              <a href="#location">Location</a>
            </li>
            <li className="nav__list-item getInfo__item" onClick={getInfo}>
              <a href="#get-infoo">Get info</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="getInfo" ref={getInfo_active}>
        <div className="closeBtn">
          <button
            onClick={() => {
              getInfo_active.current.classList.remove("active");
            }}
          >
            close
          </button>
        </div>

        <h4 className="mb-3">GET YOUR GAME ON</h4>

        <form>
          <Input type="text" label="First Name*" name="firstname" />
          <Input type="text" label="Last Name*" name="lastname" />
          <Input type="email" label="Email*" />
          <div className="country__area d-flex gap-2">
            <Input type="country" label="Country Code" name="country" />
            <Input type="tel" label="Phone" name="phone" />
          </div>
          <Input type="country" label="Country" name="country" />

          <div className="message">
            <textarea name="message" required></textarea>
            <label htmlFor="">Message</label>
          </div>

          <div className="checkBox">
            <input
              type="checkbox"
              name="checkbox"
              className="me-2"
              required
              onClick={(e) => {
                let privacyPolicy = e.target.checked;
                if (privacyPolicy === true) {
                  setSendBtn(true);
                } else {
                  setSendBtn(false);
                }
              }}
            />
            <span className="checked__label">
              I'VE READ AND ACCEPTED PRIVACY POLICY*
            </span>
          </div>
          <p className="m-1 ">
            This form collect your name, e-mail address, phone number and
            country information please check our{" "}
            <a href="#privacy">privacy policy</a> to see how we protect and
            manage your submitted data.
          </p>

          <div className="btn-area">
            <input
              type="submit"
              value="Send"
              className={sendBtn ? "btn__active" : "disable__btn  text-light"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Header;
