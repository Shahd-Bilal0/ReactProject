import React from "react";

const GridWrapperCard = ({ children }) => {
  const ticketsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(308px, 1fr))",
    gap: "20px",
  };

  return (
    <div className="tickets" style={ticketsStyle}>
      {children}
    </div>
  );
};

export default GridWrapperCard;
