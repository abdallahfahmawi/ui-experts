import { React, useState } from "react";
import "./Portfolio.scss";
import CarouselHome from "./Carousel";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="portfolio-holder">
      <div className="container">
        <div className="row">
          {/* tabs*/}
          <div className="col-lg-4 col-md-6">
            <div className="tabs-header">
              <h3>Our portfolio</h3>
              <p>View our portfolio in catagoris</p>
            </div>
            <div className="tabs">
              <ul className="tabs-list">
                <li
                  className={
                    toggleState === 1 ? "tab-item active-tab " : "tab-item "
                  }
                  onClick={() => toggleTab(1)}
                >
                  All Works
                </li>
                <li
                  className={
                    toggleState === 2 ? "tab-item active-tab " : "tab-item "
                  }
                  onClick={() => toggleTab(2)}
                >
                  Minimal Design
                </li>
                <li
                  className={
                    toggleState === 3 ? "tab-item active-tab " : "tab-item "
                  }
                  onClick={() => toggleTab(3)}
                >
                  Colorful Design
                </li>
                <li
                  className={
                    toggleState === 4 ? "tab-item active-tab " : "tab-item "
                  }
                  onClick={() => toggleTab(4)}
                >
                  Landing Page Design
                </li>
                <li
                  className={
                    toggleState === 5 ? "tab-item active-tab " : "tab-item "
                  }
                  onClick={() => toggleTab(5)}
                >
                  Mobile Apps Design
                </li>
              </ul>
            </div>
          </div>
          {/* end of the tabs*/}

          {/* Carousel*/}
          <div className="col-lg-8 col-md-6">
            <CarouselHome />
          </div>
          {/* end of the Carousel*/}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
