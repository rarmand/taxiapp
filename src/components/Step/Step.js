import React from "react";
import "./styles.css";

class Step extends React.Component {
  render() {
    return (
      <div className="step-content">
        <div className="step-number">
          <svg height="36" width="36">
            <g>
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke={this.props.numCol}
                strokeWidth="4"
                fill="transparent"
              />
              <text x="13" y="24" fontWeight="bold" fill={this.props.textCol}>
                {this.props.number}
              </text>
            </g>
          </svg>
        </div>
        <div className="step-title">
          <snap>{this.props.title}</snap>
        </div>
      </div>
    );
  }
}

export default Step;
