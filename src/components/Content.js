import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import { Route, Switch, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Content = () => {
  const location = useLocation();
  const [title, setTitle] = useState("Dashboard");

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    console.log(location.pathname);
    setTitle(pathParts[pathParts.length - 1] || "Dashboard");
  }, [location.pathname]);

  return (
    <div className="content">
      <div className="head">
        <span className="notification">
          <FontAwesomeIcon icon="fa-bell" />
        </span>
      </div>
      <h1 className="pageTitle">{title}</h1>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
