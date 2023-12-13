import React from "react";
import MainCard from "../cards/MainCard";
import TicketsWrapper from "../cards/TicketsWrapper";
import TicketCard from "../cards/TicketCard";
import TargetCard from "../cards/TargetCard";
import TasksCard from "../cards/TasksCard";
import NewsCard from "../cards/NewsCard";
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
  const {
    data: newsData,
    isPending: newsPending,
    error: newsError,
  } = FetchData("http://localhost:8000/newsData");
  const {
    data: tasksData,
    isPending: tasksPending,
    error: tasksError,
  } = FetchData("http://localhost:8000/tasksData");
  return (
    <div className="wrapper">
      <MainCard heading="Yearly Targets" description="Targets Of The Year">
        {targetError && <div>{targetError}</div>}
        {targetPending && <div>Loading data...</div>}
        {targetsData &&
          targetsData.map((data, index) => (
            <TargetCard key={index} target={data} />
          ))}
      </MainCard>
      <MainCard
        heading="Tickets Statistics"
        description="Everything About Support Tickets"
      >
        <TicketsWrapper>
          {ticketError && <div>{ticketError}</div>}
          {ticketPending && <div>Loading data...</div>}
          {ticketsData &&
            ticketsData.map((data, index) => (
              <TicketCard key={index} {...data} />
            ))}
        </TicketsWrapper>
      </MainCard>
      <MainCard heading="News" description="Latest News">
        {newsError && <div>{newsError}</div>}
        {newsPending && <div>Loading data...</div>}
        {newsData &&
          newsData.map((data, index) => <NewsCard key={index} news={data} />)}
      </MainCard>
      <MainCard heading="Tasks" description="Latest Tasks">
        {tasksError && <div>{tasksError}</div>}
        {tasksPending && <div>Loading data...</div>}
        {tasksData &&
          tasksData.map((data, index) => (
            <TasksCard key={index} tasks={data} />
          ))}
      </MainCard>
    </div>
  );
};

export default Dashboard;
