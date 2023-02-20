import React from "react";
import "./ServiceCard.scss";

const ServiceCard = (props) => {
  return (
    <div className={`${"card-holder text-center"} ${props.className} `}>
      <div>
        <img src={props.img} className="card-image" />
      </div>
      <div>
        <h6>{props.title}</h6>
        <p>
          Fast, Powerful & Most Secure Network Solutions for Smart Home &
          Businesses
        </p>
      </div>
      <button className="ReadMorebtn"> Read More</button>
    </div>
  );
};
export default ServiceCard;
