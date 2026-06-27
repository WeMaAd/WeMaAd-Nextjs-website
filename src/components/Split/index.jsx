import React from "react";

class Split extends React.Component {
  target = React.createRef();

  split = () => {
    if (this.target.current && typeof Splitting !== "undefined") {
      Splitting({ target: this.target.current });
    }
  };

  componentDidMount = this.split;
  componentDidUpdate = this.split;

  render() {
    return <div ref={this.target}>{this.props.children}</div>;
  }
}

export default Split;
