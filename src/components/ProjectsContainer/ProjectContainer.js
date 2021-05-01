import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './ProjectContainer.css'
const ProjectContainer = (props) => {
  const {
    name,
    feature,
    resource,
    github,
    live,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  } = props.project;
  return (
    <div className="container">
      <Carousel className='carousel p-2'>
        <div>
          <img src={img1} />
          <p className="legend">{name}</p>
        </div>

        <div>
          <img src={img2} />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img4} />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img5} />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img6} />
          <p className="legend">{name}</p>
        </div>
      </Carousel>
      <div className=' mt-2 mb-5 project-details'>
        <h4>Name: {name}</h4>
      </div>
    </div>
  );
};

export default ProjectContainer;
