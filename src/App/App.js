import React from "react";
import "./App.css";
import MainCard from "../components/ProjectCard/MainCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
const App = () => {
  const containerStyle = {
    margin: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(486px, 1fr))",
    gap: "20px",
  };
  return (
    <div className="container" style={containerStyle}>
      <MainCard />
      <MainCard />
    </div>
  );
};
export default App;
library.add(fas, far);
