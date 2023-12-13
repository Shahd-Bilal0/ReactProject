import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  return (
    <div className="course">
      <img src={course.img} alt="" />
      <div className="p-4">
        <h4 className="m-0">{course.title}</h4>
        <p className="description">{course.description}</p>
      </div>
      <div className="info">
        <Link to={`/courseInfo/${course.id}`} className="title">
          Course Info
        </Link>

        <span>
          <FontAwesomeIcon className="icon" icon="fa-user" />
          {course.user}
        </span>
        <span>
          <FontAwesomeIcon className="icon" icon="fa-dollar-sign" />
          {course.price}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
