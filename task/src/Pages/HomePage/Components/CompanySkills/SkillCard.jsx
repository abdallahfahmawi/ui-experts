import React from "react";
import "./SkillCard.scss";

const SkillCard = (props) => {
  return (
    <div className={`${"skillCard-holder"} ${props.className}`}>
      <div className={`${"over-rleay"} ${props.color}`}></div>
      <div className="text-holder">
        <h5>
          {/*<span>
                    <img src={props.image} />
                </span>*/}
        </h5>
        <h3>{props.cardTitle}</h3>
        <p>Lorm Spam Door Somith Door</p>
      </div>
    </div>
  );
};

export default SkillCard;
