import React from "react";
import Select from "react-select";

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
        />
      </div>
    );
  }
}
