import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="errorCont">
      <div className="error">
        <FontAwesomeIcon className="alert" icon="fa-triangle-exclamation" />
        <h1>404</h1>
        <h1 className="mb-4">Page Not Found</h1>
        <p className="mb-4">
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
        <NavLink
          className="btn btn-warning rounded-pill py-3 px-5"
          activeClassName="active"
          to="/"
        >
          Go Back To Home
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
