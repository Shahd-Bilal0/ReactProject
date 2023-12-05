import React from "react";
import MainCard from "./components/ProjectCard/MainCard";
import TicketsWrapper from "./components/ProjectCard/TicketsWrapper";
import TicketCard from "./components/ProjectCard/TicketCard";
import TargetCard from "./components/ProjectCard/TargetCard";
import UseState from "./components/ProjectCard/UseState";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <MainCard heading="Main card Targets" description="first component">
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
      </MainCard>
      <MainCard heading="Main Card Statistics" description="second component">
        <TicketsWrapper>
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
        </TicketsWrapper>
      </MainCard>
      <MainCard heading="Main Card useState" description="third component">
        <UseState />
      </MainCard>
    </div>
  );
};
export default App;
