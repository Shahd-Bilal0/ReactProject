import MainCard from "./components/ProjectCard/MainCard";
import TicketsWrapper from "./components/ProjectCard/TicketsWrapper";
import TicketCard from "./components/ProjectCard/TicketCard";
import TargetCard from "./components/ProjectCard/TargetCard";
import UseState from "./components/ProjectCard/UseState";
import FetchData from "./FetchData";
import "./App.css";

const App = () => {
  const {
    data: targetsData,
    isPending: targetPending,
    error: targetError,
  } = FetchData("http://localhost:8000/targetsData");
  const {
    data: ticketsData,
    isPending: ticketPending,
    error: ticketError,
  } = FetchData("http://localhost:8000/ticketsData");
  return (
    <div className="wrapper">
      <MainCard heading="Main card Targets" description="first component">
        {targetError && <div>{targetError}</div>}
        {targetPending && <div>Loading data...</div>}
        {targetsData &&
          targetsData.map((target, index) => (
            <TargetCard key={index} {...target} />
          ))}
      </MainCard>
      <MainCard heading="Main Card Statistics" description="second component">
        <TicketsWrapper>
          {ticketError && <div>{ticketError}</div>}
          {ticketPending && <div>Loading data...</div>}
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
