import React from "react";
import Booking from "../Booking/Booking";
import Info from "../Info/Info";

class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <p>I am available</p>
        <Booking />
        <Info />
      </div>
    );
  }
}

export default FirstPage;
