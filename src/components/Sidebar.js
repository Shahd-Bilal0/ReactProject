import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="text">Shahd</h3>
      <ul>
        <li>
          <Link className="active link" to="/">
            <FontAwesomeIcon icon="fa-chart-bar" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="/courses">
            <FontAwesomeIcon icon="fa-graduation-cap" />
            <span>Courses</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="/profile">
            <FontAwesomeIcon icon="fa-user" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            <FontAwesomeIcon icon="fa-diagram-project" />
            <span>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
