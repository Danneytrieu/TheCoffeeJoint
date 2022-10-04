import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyA_7zq6tXxBT-nhB7BN7NM7z3CYVw_LeCo";
let calendars = [
  { calendarId: "danneytrieu@gmail.com" },

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
