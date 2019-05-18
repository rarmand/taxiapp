import React from "react";
import "./styles.css";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export default class BookingDetailForm extends React.Component {
  render() {
    return (
      <div className="detail-form">
        <Arrow className="detail-icon" />
        <button>1</button>
        <Arrow />
      </div>
    );
  }
}
