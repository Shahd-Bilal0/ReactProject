import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCard = ({ data }) => {
  const {
    date,
    title,
    description,
    teamImages,
    do: doList,
    progress,
    cost,
  } = data;

  return (
    <div className="project bg-red p-20 rad-6 p-relative">
      <span className="date fs-13 c-grey">{date}</span>
      <h4 className="m-0">{title}</h4>
      <p className="c-grey mt-10 mb-10 fs-14">{description}</p>
      <div className="team">
        {teamImages.map((image, index) => (
          <a key={index} href="#">
            <img src={image} alt="" />
          </a>
        ))}
      </div>
      <div className="do d-flex">
        {doList.map((item, index) => (
          <span key={index} className="fs-13 rad-6 bg-eee">
            {item}
          </span>
        ))}
      </div>
      <div className="info between-flex">
        <div className="prog bg-eee">
          <span className="bg-red" style={{ width: `${progress}%` }}></span>
        </div>
        <div className="fs-14 c-grey">
          <i className="fa-solid fa-dollar-sign"></i>
          {cost}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
