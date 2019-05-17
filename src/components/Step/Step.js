import React from "react";
import "./styles.css";

class Step extends React.Component {
  render() {
    return (
      <div className="step-content">
        <div className="circle-content">
          <svg height="36" width="36">
            <g>
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="#ff4800"
                stroke-width="4"
                fill="transparent"
              />
              <text x="13" y="24" fontWeight="bold">
                1
              </text>
            </g>
          </svg>
        </div>
        <div className="step-info">
          <snap>Text to read here</snap>
        </div>
      </div>
    );
  }
}

export default Step;
