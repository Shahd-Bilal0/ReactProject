import React, { useEffect, useState } from "react";
import MainCard from "./components/ProjectCard/MainCard";
import TicketsWrapper from "./components/ProjectCard/TicketsWrapper";
import TicketCard from "./components/ProjectCard/TicketCard";
import TargetCard from "./components/ProjectCard/TargetCard";
import UseState from "./components/ProjectCard/UseState";
import "./App.css";

const App = () => {
  const [targetsData, setTarget] = useState(null);
  const [ticketsData, setTicket] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/targetsData")
      .then((response) => response.json())
      .then((data) => setTarget(data))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("http://localhost:8000/ticketsData")
      .then((response) => response.json())
      .then((data) => setTicket(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="wrapper">
      <MainCard heading="Main card Targets" description="first component">
        {targetsData &&
          targetsData.map((target, index) => (
            <TargetCard key={index} {...target} />
          ))}
      </MainCard>
      <MainCard heading="Main Card Statistics" description="second component">
        <TicketsWrapper>
          {ticketsData &&
            ticketsData.map((ticket, index) => (
              <TicketCard key={index} {...ticket} />
            ))}
        </TicketsWrapper>
      </MainCard>
      <MainCard heading="Main Card useState" description="third component">
        <UseState />
      </MainCard>
    </div>
  );
};

export default App;
