import React from "react";
import "./Services.scss";
import ServiceCard from "./ServiceCard";
import HomeData from "../../../../store/data/HomeData.jsx";

const Services = () => {
  const cardsRendered = HomeData.ServicesCardData.map((data) => (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={data.id}>
      <ServiceCard
        title={data.title}
        img={data.img}
        className={data.CardColor}
      />
    </div>
  ));

  return (
    <div className="container">
      <div className="services-title text-lg-center">
        <p>OUR SERVICES </p>
        <h3>We Provide Best Quality Service </h3>
        <p>
          Our commitment to quality ensures that your applications get the best
          UI design <br />
          possible. UI/UX design is more than just pixels and animations, but
          the entire application <br />
          experience.
        </p>
      </div>

      <div className="row mb-3">{cardsRendered}</div>
    </div>
  );
};

export default Services;
