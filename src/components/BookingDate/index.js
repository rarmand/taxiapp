import React from "react";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils from "react-day-picker/moment";
import "./styles.css";
import Select from "react-select";
import BookingDateButton from "../BookingDateButton";

export default class BookingDate extends React.Component {
  state = {
    calendarShown: false,
    chosenDate: ""
  };

  options = [
    "9:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
    "0:00",
    "3:00",
    "6:00"
  ];

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

  onHourChange = ({ value }) => this.props.onHourChange(value);

  render() {
    let dayBefore = new Date(this.props.date);
    dayBefore.setDate(dayBefore.getDate() - 1).toString();

    let dayAfter = new Date(this.props.date);
    dayAfter.setDate(dayAfter.getDate() + 1).toString();

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

        <Select
          value={{ label: this.props.hour, value: this.props.hour }}
          styles={detailStyles}
          options={this.options.map(value => {
            return { label: value, value };
          })}
          onChange={this.onHourChange}
        />
      </div>
    );
  }
}

const detailStyles = {
  control: styles => ({
    ...styles,
    width: "136px",
    height: "50px",
    margin: "0 0 2px 2px"
  })
};
