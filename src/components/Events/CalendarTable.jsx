import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyCQI06nQt8o4GO_9dm_cmM35gs9em7i6Xk";
let calendars = [
  { calendarId: "thecoffeejointevent@gmail.com", color: "#F0C474" },
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
