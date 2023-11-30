import React from "react";
import WrapperCard from "./WrapperCard";

const MainCard = () => {
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
      <h2 style={headingStyle}>Tickets Statistics</h2>
      <p style={paragraphStyle}>Everything About Support Tickets</p>
      <WrapperCard />
    </div>
  );
};

export default MainCard;
