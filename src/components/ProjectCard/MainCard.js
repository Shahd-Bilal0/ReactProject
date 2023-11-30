import React from "react";

const MainCard = ({ heading, description, children }) => {
  const mainCard = {
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "20px",
  };
  const headingStyle = {
    marginTop: "0",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    marginTop: "0",
    marginBottom: "20px",
    color: "grey",
    fontSize: "15px",
  };
  return (
    <div className="mainCard" style={mainCard}>
      <h2 style={headingStyle}>{heading}</h2>
      <p style={paragraphStyle}>{description}</p>
      {children}
    </div>
  );
};

export default MainCard;
