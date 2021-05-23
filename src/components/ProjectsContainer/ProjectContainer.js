import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ProjectContainer.css";
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
      <Carousel className="carousel p-2">
        <div>
          <img src={img1} alt='project-pic' />
          <p className="legend">{name}</p>
        </div>

        <div>
          <img src={img2} alt='project-pic' />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img3} alt='project-pic' />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img4} alt='project-pic' />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img5} alt='project-pic' />
          <p className="legend">{name}</p>
        </div>
        <div>
          <img src={img6} alt='project-pic' />
          <p className="legend">{name}</p>
        </div>
      </Carousel>
      <div className=" mt-2 mb-5 project-details pl-5 pt-3 pb-3">
        <h3 className="text-underline">{name}</h3>
        <p>
          <strong>Feature:</strong> {feature}
        </p>
        <p>
          <strong>Technologies:</strong> {resource}
        </p>
        <p >
          <strong>GitHub Link:</strong>{" "}
          <a href={github} rel="noreferrer" target="_blank">
            {github}
          </a>
        </p>
        <p>
          <strong>Website Link:</strong>{" "}
          <a href={live} rel="noreferrer" target="_blank">
            {live}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectContainer;
