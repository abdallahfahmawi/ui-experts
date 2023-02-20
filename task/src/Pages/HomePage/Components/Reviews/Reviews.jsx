import React from "react";
import Button from "../../../../Common/Buttons/Buttons";
import ProfileImage from "../../../../assests/images/profileimage.png";
import "./Reviews.scss";
const Reviews = () => {
  return (
    <div className="review-holder">
      <div className="review-title text-center">
        <h4>What they say about us!</h4>
        <p>Customer Review Sites for Collecting Business & Product Reviews</p>
      </div>
      <div className="reviewer-image">
        <div className="image-holder">
          <img src={ProfileImage} />
          <span className="rate">9.8</span>
        </div>
        <div className="comment">
          <p>
            Loved the design specially the color combination. Look forward to{" "}
            <br />
            work more in future.
          </p>
        </div>
        <div className="reviewer-name">
          <h5>Cris Angela</h5>
          <p>Head Of CsWeb</p>
        </div>
        {/**start of the  profile section */}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="review-footer">
                <p>Learn About My Workflow:</p>
                <h4>I'm always hungry for creativity. Available for hire</h4>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="footer-button">
                <Button buttonTitle="Wave Me" />
              </div>
            </div>
          </div>
        </div>
        {/**end of the  profile section */}
      </div>
    </div>
  );
};
export default Reviews;
