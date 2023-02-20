import React from "react";
import "./Button.scss";
import wave from "../../assests/images/waving-hand.png";

const Button = (props) => {
  return (
    <button className="wave-buton" type="submit">
      <span className="waving-hand">
        <img src={wave} />
      </span>
      {props.buttonTitle}
    </button>
  );
};

export default Button;
