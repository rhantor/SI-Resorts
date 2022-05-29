import React from "react";
import { dotImg } from "../Constants/images";

const PagePathName = ({ num, pageName }) => {
  return (
    <div className="col-2 page__title">
      <span>{num}</span>
      <img src={dotImg} alt="" />
      <span>{pageName}</span>
    </div>
  );
};

export default PagePathName;
