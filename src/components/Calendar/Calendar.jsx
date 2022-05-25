import React from 'react'
import styled from 'styled-components';

const Container = styled.details`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10%;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.2s all ease;
  :hover{
    color: var(--color-gold);
  }
`

 export const Calendar = () => {
  return (
    <Container>
      <summary>Event Calendar</summary>
      <div
        class="smgc-calendar-placeholder"
        id="smgc-cal-YTKB9oe0cfrjQesZSPpX"
      ></div>
    </Container>
  );
}
