import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TasksCard = ({ tasks }) => {
  return (
    <div className="tasks">
      <div className="info">
        <h3>{tasks.title}</h3>
        <p>{tasks.description}</p>
      </div>
      <FontAwesomeIcon icon="fa-trash-can" className="delete"></FontAwesomeIcon>
    </div>
  );
};

export default TasksCard;
