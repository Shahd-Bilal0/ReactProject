import React from "react";
import TicketCard from "./TicketCard";

const WrapperCard = () => {
  const ticketsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(308px, 1fr))",
    gap: "20px",
  };

  return (
    <div className="tickets" style={ticketsStyle}>
      <TicketCard
        icon="fa-rectangle-list fa-2x"
        count={2500}
        label="Total"
        color="orange"
      />
      <TicketCard
        icon="fa-spinner fa-2x"
        count={500}
        label="Pending"
        color="blue"
      />
      <TicketCard
        icon="fa-circle-check fa-2x"
        count={1900}
        label="Closed"
        color="green"
      />
      <TicketCard
        icon="fa-rectangle-xmark fa-2x"
        count={100}
        label="Deleted"
        color="red"
      />
    </div>
  );
};

export default WrapperCard;
