import React from "react";
import MainCard from "../cards/MainCard";
import TicketsWrapper from "../cards/TicketsWrapper";
import TicketCard from "../cards/TicketCard";
import TargetCard from "../cards/TargetCard";
import UseState from "../cards/UseState";
import FetchData from "../../FetchData";

const Dashboard = () => {
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
            <TargetCard key={index} target={target} />
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

export default Dashboard;
