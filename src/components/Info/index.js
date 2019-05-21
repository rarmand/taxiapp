import React, { Component } from "react";
import "./styles.css";

export default class Info extends Component {
  render() {
    return (
      <div
        className={
          this.props.bookingState.infoShown ? "info-part" : "info-none"
        }
      >
        <p>
          <span>Od:</span> {this.props.bookingState.pickup}
        </p>
        <p>
          <span>Cel:</span> {this.props.bookingState.destination}
        </p>
        <p>
          <span>Data:</span> {this.props.bookingState.date}
        </p>
        <p>
          <span>Godzina:</span> {this.props.bookingState.hour}
        </p>
        <p>
          <span>Kod rabatowy:</span> {this.props.bookingState.voucher}
        </p>
        <p>
          <span>Liczba pasażerów:</span> {this.props.bookingState.people}
        </p>
        <p>
          <span>Bagaż:</span> {this.props.bookingState.bags}
        </p>
        <p>
          <span>Dodatkowy sprzęt:</span> {this.props.bookingState.equip}
        </p>
        <p>
          <span>Sprzęd dla zwierząt:</span> {this.props.bookingState.pets}
        </p>
        <p>
          <span>Sprzęd dla dzieci:</span> {this.props.bookingState.kids}
        </p>
      </div>
    );
  }
}
