import React from "react";

class Box extends React.Component {
  static defaultProps = {
    id: 1,
    height: 100,
    width: 100,
    color: "blue",
    removeBox: () => {
      alert("default function");
    }
  };

  handleRemove = this.handleRemove.bind(this);
  handleRemove() {
    this.props.removeBox(this.props.id);
  }

  render() {
    return (
      <div>
        <div
          className="Box"
          style={{
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: `${this.props.color}`
          }}
        ></div>
        <button onClick={this.handleRemove}>remove</button>
      </div>
    );
  }
}
export default Box;
