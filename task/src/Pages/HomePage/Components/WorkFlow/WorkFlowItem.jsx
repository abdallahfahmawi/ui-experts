import React from "react";
import "./WorkFlowItem.scss";

const WorkFlowItem = (props) => {
  return (
    <div className="item-holder d-flex">
      <div className={`${"item-number"} ${props.ItemColor}`}>
        <span>{props.number}</span>
      </div>
      <div className="item-description">
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default WorkFlowItem;
