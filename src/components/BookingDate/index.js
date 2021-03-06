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
    chosenDate: new Date().toString(),
    dayBefore: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toString(),
    dayAfter: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toString()
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
    this.props.onDateChange(day.toString());
    this.setState({
      calendarShown: !this.state.calendarShown,
      chosenDate: day.toString(),
      dayBefore: new Date(day.getTime() - 24 * 60 * 60 * 1000).toString(),
      dayAfter: new Date(day.getTime() + 24 * 60 * 60 * 1000).toString()
    });
  };

  onHourChange = ({ value }) => this.props.onHourChange(value);

  render() {
    return (
      <div className="booking-date">
        <div className="booking-date-day">
          <BookingDateButton
            isHighlighted={this.props.date === this.state.dayBefore}
            onClick={this.props.onDateChange}
            date={this.state.dayBefore}
          />
          <BookingDateButton
            isHighlighted={this.props.date === this.state.chosenDate}
            onClick={this.props.onDateChange}
            date={this.state.chosenDate}
          />
          <BookingDateButton
            isHighlighted={this.props.date === this.state.dayAfter}
            onClick={this.props.onDateChange}
            date={this.state.dayAfter}
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
            selectedDays={new Date(this.state.chosenDate)}
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

// styles for Select Hour button
const detailStyles = {
  control: styles => ({
    ...styles,
    width: "136px",
    height: "50px",
    margin: "0 0 2px 2px"
  })
};
