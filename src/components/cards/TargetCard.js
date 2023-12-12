import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TargetRow = ({ target }) => {
  return (
    <div className="target">
      <div
        className="icons"
        style={{ color: target.color, backgroundColor: target.background }}
      >
        <FontAwesomeIcon className="icon" icon={target.icon} />
      </div>
      <div className="details">
        <span className="category">{target.category}</span>
        <span className="value">{target.value}</span>
        <div className="progress" style={{ background: target.background }}>
          <span
            style={{ width: target.progress, backgroundColor: target.color }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default TargetRow;
