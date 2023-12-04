import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TicketCard.css";
const TicketCard = ({ icon, count, label, color }) => {
  return (
    <div className="box">
      <FontAwesomeIcon className="icon" icon={icon} style={{ color: color }} />
      <span className="d-block text-black fw-bold fs-5 mb-1 ">{count}</span>
      {label}
    </div>
  );
};

export default TicketCard;
