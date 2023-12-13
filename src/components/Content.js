import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import CourseInfo from "./pages/CourseInfo";
import { Route, Switch } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <div className="head">
        <span className="notification">
          <FontAwesomeIcon icon="fa-bell" />
        </span>
      </div>
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
        <Route exact path="/CourseInfo/:id">
          <CourseInfo />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
