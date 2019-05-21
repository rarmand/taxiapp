import React from "react";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils from "react-day-picker/moment";
import "./styles.css";
import "moment/locale/pl";

export default class BookingDate extends React.Component {
  state = {
    calendarShown: false,
    chosenDate: ""
  };

  onClickCalendar = event => {
    event.preventDefault();
    this.setState({ calendarShown: !this.state.calendarShown });
  };

  handleDayClick = day => {
    this.props.onDateChange(day);
    this.setState({ calendarShown: !this.state.calendarShown });
  };

  onDateClicked = date => {
    this.setState({ chosenDate: date });
  };

  render() {
    let dayBefore = new Date(this.props.date);
    dayBefore.setDate(dayBefore.getDate() - 1).toString();

    let dayAfter = new Date(this.props.date);
    dayAfter.setDate(dayAfter.getDate() + 1).toString();

    const hour = new Date(this.props.hour).toLocaleTimeString(
      "pl-PL-u-ca-iso8601",
      {
        hour: "2-digit",
        minute: "2-digit"
      }
    );

    return (
      <div className="booking-date">
        <div className="booking-date-day">
          <BookingDateButton
            chosenDate={this.state.chosenDate}
            onClick={this.onDateClicked}
            date={dayBefore}
          />
          <BookingDateButton
            chosenDate={this.state.chosenDate}
            onClick={this.onDateClicked}
            date={this.props.date}
          />
          <BookingDateButton
            chosenDate={this.state.chosenDate}
            onClick={this.onDateClicked}
            date={dayAfter}
          />

          <button onClick={this.onClickCalendar} className="calendar-picker">
            <Calendar />
          </button>
          <DayPicker
            className={
              this.state.calendarShown ? "calendar-shown" : "calendar-hidden"
            }
            localeUtils={MomentLocaleUtils}
            locale="pl"
            selectedDays={this.state.date}
            onDayClick={this.handleDayClick}
          />
        </div>

        <div className="booking-hour">
          <span>do:</span>
          <button>{hour}</button>
        </div>
      </div>
    );
  }
}

export class BookingDateButton extends React.Component {
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
