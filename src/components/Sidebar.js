import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="text">Shahd</h3>
      <ul>
        <li>
          <a className="active link" href="/">
            <FontAwesomeIcon icon="fa-chart-bar" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a className="link" href="/">
            <FontAwesomeIcon icon="fa-graduation-cap" />
            <span>Courses</span>
          </a>
        </li>
        <li>
          <a className="link" href="/">
            <FontAwesomeIcon icon="fa-user" />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a className="link" href="/">
            <FontAwesomeIcon icon="fa-diagram-project" />
            <span>Projects</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
