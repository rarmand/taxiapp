import React from "react";
import "react-day-picker/lib/style.css";

export default class BookingDateButton extends React.Component {
  week = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
  ];

  render() {
    const date = new Date(this.props.date);
    return (
      <button
        type="button"
        onClick={e => {
          this.props.onClick(date);
        }}
        style={
          this.props.chosenDate.toString() === date.toString()
            ? { color: "#ff4800" }
            : { color: "#3f454d" }
        }
      >
        <span className="date">
          {date.toLocaleDateString("pl-PL-u-ca-iso8601", {
            day: "2-digit",
            month: "2-digit"
          })}
        </span>
        <span className="day">{this.week[date.getDay()]}</span>
      </button>
    );
  }
}
