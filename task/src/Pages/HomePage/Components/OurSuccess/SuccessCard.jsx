import React, { useState} from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./SuccessCard.scss";

const SuccessCard = (props) => {
  const [counteroOn, setCounterOn] = useState(false);


  

  return (
    <div className="cardNumber-holder text-center">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className={`${"number-holder"} ${props.className}`}>
          {counteroOn && <CountUp start={0} end={137} duration={2} delay={0} />}
          {/*<span>{number}</span>*/}
        </div>
      </ScrollTrigger>
      <p>{props.cardTitle}</p>
    </div>
  );
};

export default SuccessCard;
