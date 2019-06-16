import React from "react";
import TextField from '@material-ui/core/TextField';

export default class Input extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
      <TextField

        id="standard-name"
        label="Input"
        margin="normal"
        onChange={this.props.handleChange}
      />
      </form>
    );
  }
}
