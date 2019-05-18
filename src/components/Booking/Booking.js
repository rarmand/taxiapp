import React, { Component } from "react";
import BookingForm, { BookingEasyForm } from "../BookingForm/BookingForm";
import BookingDetailForm from "../BookingDetailForm/BookingDetails";
import BookingDate from "../BookingDate";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./styles.css";

class Booking extends Component {
  render() {
    return (
      <div className="booking-part">
        <div className="booking-forms">
          <BookingForm title={"Odbiór"} name={"pickup"} ref={"pickup-data"} />
          <BookingForm title={"Cel"} name={"dest"} ref={"dest-data"} />
          <BookingDate />
          <BookingEasyForm title={"Kod rabatowy"} />
        </div>

        <div className="booking-more-info">
          <span>Dla 1-2 pasażerów z 1-2 walizkami</span>
          <button>
            <span>Więcej opcji</span>
            <Arrow />
          </button>
        </div>

        <div className="booking-details">
          <BookingDetailForm />
          <BookingDetailForm />
          <BookingDetailForm />
          <BookingDetailForm />
          <BookingDetailForm />
        </div>

        <div className="booking-button">
          <button>Rozpocznij rezerwację</button>
        </div>
      </div>
    );
  }
}

export default Booking;
