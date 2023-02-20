import React from "react";
import BlogCard from "./BlogCard";
import Clients from "../Clients/Clients";
import HomeData from "../../../../store/data/HomeData";
import "./OurBlog.scss";

const OurBlog = () => {
  const clients = HomeData.clients;
  const blogsData = HomeData.blogsData;

  return (
    <div className="blogSection">
      <div className="container">
        <div className="BlogHeader text-center">
          <h3>Our Blog</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            <br /> dapibus vehicula elit vel egestas.
          </p>
        </div>
        <div className="row">
          {blogsData.map((data) => (
            <div className="col-lg-4 col-md-4" key={data.id}>
              <BlogCard
                img={data.img}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
        <div>
          <Clients clients={clients} />
        </div>
      </div>
    </div>
  );
};
export default OurBlog;
