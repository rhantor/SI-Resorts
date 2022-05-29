import React from "react";

const Input = (props) => {
  return (
    <div className="input__group">
      <input type={props.type} required name={props.name} />
      <label>{props.label}</label>
    </div>
  );
};

export default Input;
