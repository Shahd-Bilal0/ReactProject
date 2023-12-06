import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TargetCard.css";
const TargetRow = (props) => {
  return (
    <div className="target">
      <div
        className="icons"
        style={{ color: props.color, backgroundColor: props.background }}
      >
        <FontAwesomeIcon className="icon" icon={props.icon} />
      </div>
      <div className="details">
        <span className="category">{props.category}</span>
        <span className="value">{props.value}</span>
        <div className="progress" style={{ background: props.background }}>
          <span
            style={{ width: props.progress, backgroundColor: props.color }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default TargetRow;
