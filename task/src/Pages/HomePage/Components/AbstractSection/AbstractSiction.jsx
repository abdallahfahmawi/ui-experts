import React from "react";
import Button from "../../../../Common/Buttons/Buttons";
import banner from "../../../../assests/images/banner.png";
import "./AbstarctSection.scss";

const AbstractSection = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="homepage-info font-color">
              <h3>Provide You best </h3>
              <h3>Best Ui Service</h3>
              <p>Mobile App Design and Development Studio. You can hire us</p>
              <Button buttonTitle="Wave Me" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 image-col">
            <img src={banner} className="homepage-banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractSection;
