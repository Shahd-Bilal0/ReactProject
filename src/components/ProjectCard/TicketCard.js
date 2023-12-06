import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TicketCard.css";
const TicketCard = (props) => {
  return (
    <div className="box">
      <FontAwesomeIcon
        className="icon"
        icon={props.icon}
        style={{ color: props.color }}
      />
      <span className="d-block text-black fw-bold fs-5 mb-1 ">
        {props.count}
      </span>
      {props.label}
    </div>
  );
};

export default TicketCard;
