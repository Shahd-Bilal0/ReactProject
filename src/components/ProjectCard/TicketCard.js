import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const TicketCard = ({ icon, count, label, color }) => {
  const boxStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "13px",
    padding: "20px",
    color: "grey",
    textAlign: "center",
  };
  const iconStyle = {
    marginBottom: "10px",
    fontSize: "2em",
    fontWeight: "400",
    color: color,
  };
  const countStyle = {
    fontWeight: "bold",
    display: "block",
    color: "black",
    fontSize: "25px",
    marginBottom: "5px",
  };
  return (
    <div className="box" style={boxStyle}>
      <FontAwesomeIcon icon={faPenNib} style={iconStyle} />
      <span className="count" style={countStyle}>
        {count}
      </span>
      {label}
    </div>
  );
};

export default TicketCard;
