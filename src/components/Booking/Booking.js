import React from "react";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./styles.css";

class Booking extends React.Component {
  render() {
    return (
      <div className="booking-part">
        <div className="booking-forms">
          <div className="booking-form">
            <span>Odbiór:</span>
            <input type="text" name="booking-choice" />
            <Arrow />
            <span className="booking-menu" />
          </div>

          <div className="booking-form">
            <span>Cel:</span>
            <input type="text" name="booking-choice" />
            <Arrow />
            <span className="booking-menu" />
          </div>

          <div className="booking-date">
            <div className="booking-date-start">
              <button>
                <span className="date">22.05</span>
                <span className="day">Czwartek</span>
              </button>
              <button>
                <span className="date">23.05</span>
                <span className="day">Piątek</span>
              </button>
              <button>
                <span className="date">24.05</span>
                <span className="day">Sobota</span>
              </button>
              <button className="calendar-picker">
                <Calendar />
              </button>
            </div>

            <div className="booking-date-end">
              <span>do:</span>
              <button>22:05</button>
            </div>
          </div>

          <div className="booking-form">
            <span>Kod rabatowy:</span>
            <input type="text" name="booking-choice" />
            <span className="booking-menu" />
          </div>
        </div>

        <div className="booking-more-info">
          <span>Dla 1-2 pasażerów z 1-2 walizkami</span>
          <button>
            <span>Więcej opcji</span>
            <Arrow />
          </button>
        </div>

        <div className="booking-details">
          <div className="detail-form">
            <Arrow className="detail-icon" />
            <button>1</button>
            <Arrow />
          </div>

          <div className="detail-form">
            <Arrow className="detail-icon" />
            <button>1</button>
            <Arrow />
          </div>

          <div className="detail-form">
            <Arrow className="detail-icon" />
            <button>1</button>
            <Arrow />
          </div>

          <div className="detail-form">
            <Arrow className="detail-icon" />
            <button>1</button>
            <Arrow />
          </div>
        </div>

        <div className="booking-button">
          <button>Rozpocznij rezerwację</button>
        </div>

        <div className="booking-data" />
      </div>
    );
  }
}

export default Booking;
