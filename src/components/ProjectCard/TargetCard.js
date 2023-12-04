import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TargetCard.css";
const TargetRow = ({ icon, color, background, progress, category, value }) => {
  return (
    <div className="target">
      <div
        className="icons"
        style={{ color: color, backgroundColor: background }}
      >
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>
      <div className="details">
        <span className="category">{category}</span>
        <span className="value">{value}</span>
        <div className="progress" style={{ background: background }}>
          <span style={{ width: progress, backgroundColor: color }}></span>
        </div>
      </div>
    </div>
  );
};

export default TargetRow;
