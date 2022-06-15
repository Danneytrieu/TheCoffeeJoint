import React from 'react'
import styled from 'styled-components';
import eventCalendar from "../../assets/images/eventCalendar.png"

const Container = styled.details`
  display: flex;
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
  summary {
    /* Disable text highlighter */
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }
  img {
    height: 40px;
    margin-left: 10px;
  }
`;

 export const Calendar = () => {
  return (
    <Container>
      <summary>
        Events Calendar
        <img src={eventCalendar} alt="" />
        <button></button>
      </summary>
      <div
        className="smgc-calendar-placeholder"
        id="smgc-cal-YTKB9oe0cfrjQesZSPpX"
      ></div>
    </Container>
  );
}
