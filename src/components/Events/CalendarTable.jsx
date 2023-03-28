import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyDqNk8ly82Erl4jL-nrAA1ADvjDtDR7MLg";
let calendars = [
  {
    calendarId:
      "c_b0ca1adddf511f5a381fa41de1cec237c28d63e7d24cd9b80d43fc003c7ffc79@group.calendar.google.com",
    color: "#F0C474",
  },
];

class CalendarTable extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    );
  }
}

export default CalendarTable;
