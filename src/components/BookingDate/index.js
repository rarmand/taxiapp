import React from "react";
import { BookingDateStartButton } from "../BookingForm/BookingForm";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import "./styles.css";

export default class BookingDate extends React.Component {
  render() {
    return (
      <div className="booking-date">
        <div className="booking-date-start">
          <BookingDateStartButton date={"23.05"} day={"Piątek"} />
          <BookingDateStartButton date={"24.05"} day={"Sobota"} />
          <BookingDateStartButton date={"25.05"} day={"Niedziela"} />

          <button className="calendar-picker">
            <Calendar />
          </button>
        </div>

        <div className="booking-date-end">
          <span>do:</span>
          <button>22:05</button>
        </div>
      </div>
    );
  }
}
