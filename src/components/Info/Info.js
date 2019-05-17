import React from "react";
import Step from "../Step/Step";

const info_styles = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  padding: "40px"
};

class Info extends React.Component {
  render() {
    return (
      <div className="steps-content" style={info_styles}>
        <Step />
        <Step />
        <Step />
      </div>
    );
  }
}

export default Info;
