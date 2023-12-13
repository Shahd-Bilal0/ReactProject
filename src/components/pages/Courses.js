import { Button } from "react-bootstrap";
import FetchData from "../../FetchData";
import CourseCard from "../cards/CourseCard";
const Courses = () => {
  const {
    data: coursesData,
    isPending: coursesPending,
    error: coursesError,
  } = FetchData("http://localhost:8000/coursesData");
  return (
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
          backgroundColor: "#777",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="primary">Add New Course</Button>
      </div>
    </div>
  );
};

export default Courses;
