import { Button } from "react-bootstrap";
import FetchData from "../../FetchData";
import CourseCard from "../cards/CourseCard";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Courses = () => {
  const {
    data: coursesData,
    isPending: coursesPending,
    error: coursesError,
  } = FetchData("http://localhost:8000/coursesData");
  return (
    <div>
      <h1 className="pageTitle">Courses</h1>
      <div className="courses-page">
        {coursesError && <div>{coursesError}</div>}
        {coursesPending && <div>Loading data...</div>}
        {coursesData &&
          coursesData.map((data, index) => (
            <CourseCard key={index} course={data} />
          ))}
        <div
          className="course"
          style={{
            backgroundColor: "rgb(119 119 119 / 42%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/newCourse">
            <Button className="m-4 rounded-2" variant="primary">
              Add New Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
