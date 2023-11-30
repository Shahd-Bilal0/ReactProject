import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TargetRow = ({ icon, color, background, progress, category, value }) => {
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };
  const iconsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
    marginRight: "15px",
    color: color,
    backgroundColor: background,
  };
  const iconStyle = {
    marginBottom: "10px",
    fontSize: "1.25em",
    fontWeight: "400",
    color: color,
  };
  const detailStyle = {
    flex: "1",
  };
  const categoryStyle = {
    fontSize: "14px",
    color: "grey",
  };
  const valueStyle = {
    display: "block",
    fontWeight: "bold",
    marginTop: "5px",
    marginBottom: "10px",
  };
  const progressStyle = {
    height: "4px",
    position: "relative",
    background: background,
  };
  const spanStyle = {
    position: "absolute",
    left: "0",
    top: "0",
    height: "100%",
    width: progress,
    backgroundColor: color,
  };

  return (
    <div className="box" style={boxStyle}>
      <div className="icons" style={iconsStyle}>
        <FontAwesomeIcon icon={icon} style={iconStyle} />
      </div>
      <div className="details" style={detailStyle}>
        <span className="category" style={categoryStyle}>
          {category}
        </span>
        <span className="value" style={valueStyle}>
          {value}
        </span>
        <div className="progress" style={progressStyle}>
          <span style={spanStyle}></span>
        </div>
      </div>
    </div>
  );
};

export default TargetRow;
