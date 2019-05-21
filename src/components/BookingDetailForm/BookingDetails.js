import React from "react";
import Select from "react-select";

const detailStyles = {
  control: styles => ({
    ...styles,
    width: "164px",
    height: "48px",
    margin: "0 2px 2px 0"
  })
};

export default class BookingDetailForm extends React.Component {
  onChange = ({ value }) => this.props.onChange(value);

  render() {
    return (
      <div style={{ color: "#3f454d" }}>
        <Select
          value={{ label: this.props.value, value: this.props.value }}
          onChange={this.onChange}
          options={this.props.options.map(value => {
            return { label: value, value };
          })}
          styles={detailStyles}
        />
      </div>
    );
  }
}
