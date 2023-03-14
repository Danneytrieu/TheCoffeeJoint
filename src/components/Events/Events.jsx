import React from "react";
import styled from "styled-components";
import eventCalendar from "../../assets/images/eventCalendar.png";
import CalendarTable from "./CalendarTable";

const Container = styled.div`
  margin: 200px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.2s all ease;
  :hover {
    color: var(--color-gold);
  }
  h3 {
    margin-bottom:30px
  }
  img {
    height: 40px;
    margin-left: 10px;
  }
`;

const Events = () => {
  return (
    <>
      <Container>
        <h3>
          Events Calendar
          <img src={eventCalendar} alt="" />
        </h3>
        <CalendarTable />
      </Container>
    </>
  );
};

export default Events;
