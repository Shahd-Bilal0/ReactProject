import React from "react";
import "./App.css";
import MainCard from "../components/ProjectCard/MainCard";
import GridWrapperCard from "../components/ProjectCard/GridWrapperCard";
import WrapperCard from "../components/ProjectCard/WrapperCard";
import TicketCard from "../components/ProjectCard/TicketCard";
import TargetCard from "../components/ProjectCard/TargetCard";
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
      <MainCard heading="Main card Targets" description="second component">
        <WrapperCard>
          <TargetCard
            icon="fa-dollar-sign"
            color="blue"
            background="rgb(0 117 255 / 20%)"
            progress="90%"
            category="Money"
            value="$20.000"
          />
          <TargetCard
            icon="fa-code"
            color="orange"
            background="rgb(245 158 11 / 20%)"
            progress="80%"
            category="Projects"
            value="24"
          />
          <TargetCard
            icon="fa-user"
            color="green"
            background="rgb(34 197 94 / 20%)"
            progress="55%"
            category="Team"
            value="12"
          />
        </WrapperCard>
      </MainCard>
      <MainCard heading="Main Card Statistics" description="first component">
        <GridWrapperCard>
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
        </GridWrapperCard>
      </MainCard>
    </div>
  );
};
export default App;
library.add(fas, far);
