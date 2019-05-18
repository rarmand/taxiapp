import React from "react";
import Step from "../Step/Step";

const info_styles = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  padding: "20px"
};

class Info extends React.Component {
  render() {
    return (
      <div className="steps-content" style={info_styles}>
        <Step
          number="1"
          title="Czas i adres"
          numCol="#ff4800"
          textCol="#ffffff"
        />
        <Step
          number="2"
          title="Wybierz auto"
          numCol="#4a575f"
          textCol="#4a575f"
        />
        <Step
          number="3"
          title="Dokonaj płatności"
          numCol="#4a575f"
          textCol="#4a575f"
        />
      </div>
    );
  }
}

export default Info;
