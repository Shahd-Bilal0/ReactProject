import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "./pages/Dashboard";
const Content = () => {
  let title = "Dashboard";
  return (
    <div className="content">
      <div className="head">
        <span className="notification">
          <FontAwesomeIcon icon="fa-bell" />
        </span>
      </div>
      <h1 className="pageTitle">{title}</h1>
      <Dashboard />
    </div>
  );
};

export default Content;
