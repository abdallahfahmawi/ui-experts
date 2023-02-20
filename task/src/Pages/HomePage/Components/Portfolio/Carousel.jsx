import Carousel from "react-bootstrap/Carousel";
import HomeData from "../../../../store/data/HomeData";

import "./Carousel.scss";

function CarouselHome() {
  const renderedCarouselItems = HomeData.carouselImages.map((data) => (
    <div className="col-lg-5 col-md-6 col-sm-6 col-6" key={data.id}>
      <img src={data.img} className="carousel-images" />
    </div>
  ));

  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="row p-0 g-3">{renderedCarouselItems}</div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row p-0 g-3">{renderedCarouselItems}</div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="row p-0 g-3">{renderedCarouselItems}</div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
