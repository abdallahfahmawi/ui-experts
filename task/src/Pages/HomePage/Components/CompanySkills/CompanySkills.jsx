import React from "react";
import SkillCard from "./SkillCard.jsx";
import "./CompanySkills.scss";

const CompanySkills = () => {
  return (
    <div className="companySkillsHolder">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <SkillCard
              className="skillCard-design"
              cardTitle="Design"
              color="navy-blue"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <SkillCard
              className="skillCard-sketch"
              cardTitle="Sketch"
              color="orange"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <SkillCard
              className="skillCard-test"
              cardTitle="Testing"
              color="light-purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySkills;
