import React, { Component } from "react";
import "./styles.css";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export default class BookingForm extends Component {
  render() {
    return (
      <div className="booking-form">
        <span>{this.props.title}:</span>
        <input
          type="text"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {this.props.withArrow ? <Arrow /> : null}
        <span className="booking-menu" />
      </div>
    );
  }
}

export class BookingDateStartButton extends Component {
  render() {
    return (
      <button>
        <span className="date">{this.props.date}</span>
        <span className="day">{this.props.day}</span>
      </button>
    );
  }
}
