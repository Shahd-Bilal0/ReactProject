import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="text">Shahd</h3>
      <ul>
        <li>
          <NavLink className="link" activeClassName="active" exact to="/">
            <FontAwesomeIcon icon="fa-chart-bar" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" activeClassName="active" to="/courses">
            <FontAwesomeIcon icon="fa-graduation-cap" />
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" activeClassName="active" to="/profile">
            <FontAwesomeIcon icon="fa-user" />
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" activeClassName="active" to="/projects">
            <FontAwesomeIcon icon="fa-diagram-project" />
            <span>Projects</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
