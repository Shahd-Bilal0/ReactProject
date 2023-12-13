import { useParams } from "react-router-dom";
import FetchData from "../../FetchData";
import { Button } from "react-bootstrap";
const CourseInfo = () => {
  const { id } = useParams();
  const {
    data: course,
    isPending,
    error,
  } = FetchData("http://localhost:8000/coursesData/" + id);
  return (
    <div>
      <h1 className="pageTitle">{`Course ${+id + 1}`}</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading data...</div>}
      {course && (
        <div className="courseInfo">
          <div>
            <img src={`../${course.img}`} alt="" />
          </div>
          <div className="details">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>
              <span>Participants : </span>
              {course.user}
            </p>
            <p>
              <span>Price : $</span>
              {course.price}
            </p>
            <p>
              <span>Rating </span>
              {Array.from({ length: course.rating }).map((_, index) => (
                <span className="star" key={index}>
                  &#9733;
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
      <div
        className="courseInfo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="warning">Apply Now</Button>
      </div>
    </div>
  );
};

export default CourseInfo;
