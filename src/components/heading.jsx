import React from "react";

class Heading extends React.Component {
  render() {
    // Temporary component, meant for generating the heading
    let H = this.props.heading < 7 ? "h" + this.props.heading : "h2";

    let value = this.props.value;
    return <H style={{ display: 'inline' }}>{value}</H>;
  }
}

export default Heading;
