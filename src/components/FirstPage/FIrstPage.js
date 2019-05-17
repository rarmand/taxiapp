import React from "react";
import "./styles.css";
import logo from "../../assets/talixo_logo_2x.png";
import Booking from "../Booking/Booking";
import Info from "../Info/Info";

class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="margin-div">
            <img src={logo} alt="Talixo" />
          </div>
        </header>

        <div className="margin-div booking-info">
          <Info />
          <Booking />
        </div>
      </div>
    );
  }
}

export default FirstPage;
