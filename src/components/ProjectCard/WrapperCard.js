import React from "react";

const WrapperCard = ({ children }) => {
  const targetsStyle = {};

  return (
    <div className="targets" style={targetsStyle}>
      {children}
    </div>
  );
};

export default WrapperCard;
