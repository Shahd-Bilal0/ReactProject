import { useParams } from "react-router-dom";
import FetchData from "../../FetchData";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
const CourseInfo = () => {
  const hist = useHistory();
  const { id } = useParams();
  const {
    data: course,
    isPending,
    error,
  } = FetchData("http://localhost:8000/coursesData/" + id);
  const handleDelete = () => {
    fetch("http://localhost:8000/coursesData/" + course.id, {
      method: "DELETE",
    }).then(() => {
      hist.push("/courses");
    });
  };
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
        <Button variant="warning" onClick={handleDelete}>
          Delete This Course{"  "}
          <FontAwesomeIcon
            icon="fa-trash-can"
            className="delete"
          ></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
};

export default CourseInfo;
