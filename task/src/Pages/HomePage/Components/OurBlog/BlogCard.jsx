import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.scss";

import Arrow from "../../../../assests/images/arrow.png";

const BlogCard = (props) => {
  return (
    <Link className="Blog-link">
      <div className="cardHolder">
        <div className="imageHolder"></div>
        <div className="descriptionBlogCard">
          <p className="first-text">
            Cutting-edge products launched through Logitech-Excel
          </p>
          <p className="second-text">
            The Managing Director & Cluster Head India & South-West Asia at
            Logitech Sumanta Datta.
          </p>
          <span>
            <img src={Arrow} />
            {/*<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>*/}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
