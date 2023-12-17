import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import CourseInfo from "./pages/CourseInfo";
import NewCourse from "./pages/NewCourse";
import { Route, Switch } from "react-router-dom";
import Error404 from "./pages/Error404";

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
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/courseInfo/:id">
          <CourseInfo />
        </Route>
        <Route path="/newCourse">
          <NewCourse />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
