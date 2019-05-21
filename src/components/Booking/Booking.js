import React, { Component } from "react";
import BookingForm from "../BookingForm/BookingForm";
import BookingDetailForm from "../BookingDetailForm/BookingDetails";
import BookingDate from "../BookingDate";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./styles.css";
import Info from "../Info";

export default class Booking extends Component {
  state = {
    pickup: "",
    destination: "",
    date: new Date().toString(),
    hour: new Date().toLocaleTimeString("pl-PL-u-ca-iso8601", {
      hour: "2-digit",
      minute: "2-digit"
    }),
    voucher: "",
    people: "2",
    bags: "2",
    equip: "0",
    pets: "0",
    kids: "0",
    moreOptsShown: false,
    infoShown: false
  };

  onInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onDetailChange = name => selectedOption => {
    this.setState({ [name]: selectedOption });
  };

  onDateChange = date => selectedDays => {
    this.setState({ [date]: selectedDays });
  };

  onHourChange = hour => selectedOption => {
    this.setState({ [hour]: selectedOption });
  };

  onClick = event => {
    event.preventDefault();
    this.setState({ moreOptsShown: !this.state.moreOptsShown });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ infoShown: true });
  };

  render() {
    const {
      pickup,
      destination,
      date,
      hour,
      voucher,
      people,
      bags,
      equip,
      pets,
      kids,
      moreOptsShown
    } = this.state;

    return (
      <div className="booking">
        <div className="booking-part">
          <form onSubmit={this.onSubmit}>
            <div className="booking-forms">
              <BookingForm
                title={"Odbiór"}
                value={pickup}
                withArrow={true}
                onChange={this.onInputChange("pickup")}
              />
              <BookingForm
                title={"Cel"}
                value={destination}
                onChange={this.onInputChange("destination")}
                withArrow={true}
              />
              <BookingDate
                onDateChange={this.onDateChange("date")}
                onHourChange={this.onHourChange("hour")}
                date={date}
                day={date.weekday}
                hour={hour}
              />

              <BookingForm
                title={"Kod rabatowy"}
                value={voucher}
                onChange={this.onInputChange("voucher")}
              />
            </div>

            <div className="booking-more-info">
              <span>Dla 1-2 pasażerów z 1-2 walizkami</span>
              <button onClick={this.onClick}>
                <span> {moreOptsShown ? "Ukryj" : "Więcej opcji"}</span>
                <Arrow />
              </button>
            </div>

            <div
              className={
                "booking-details " +
                (moreOptsShown ? "" : " booking-details-hidden")
              }
            >
              <BookingDetailForm
                value={people}
                options={["1", "2", "3", "4", "5"]}
                onChange={this.onDetailChange("people")}
              />
              <BookingDetailForm
                value={bags}
                options={["1", "2", "3", "4"]}
                onChange={this.onDetailChange("people")}
              />
              <BookingDetailForm
                value={equip}
                options={["1", "2", "3"]}
                onChange={this.onDetailChange("equip")}
              />
              <BookingDetailForm
                value={pets}
                options={["1", "2", "3", "4"]}
                onChange={this.onDetailChange("pets")}
              />
              <BookingDetailForm
                value={kids}
                options={["1", "2"]}
                onChange={this.onDetailChange("kids")}
              />
            </div>

            <div className="booking-button">
              <button type="submit">Rozpocznij rezerwację</button>
            </div>
          </form>
        </div>
        <Info bookingState={this.state} />
      </div>
    );
  }
}
