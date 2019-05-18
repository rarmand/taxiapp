import React from "react";
import "./styles.css";

class BookingForm extends React.Component {
  render() {
    return (
      <div className="booking-form">
        <span>{this.props.title}</span>
        <input type="text" name="booking-choice" />
        <span className="booking-menu" />
      </div>
    );
  }
}

export default BookingForm;
