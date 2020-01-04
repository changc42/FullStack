import React from "react";
import uuid from "uuid/v4";

class BoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    addBox: () => {
      alert("default function");
    }
  };

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let { height, width, color } = this.state;
    this.props.addBox({
      id: uuid(),
      height: height,
      width: width,
      color: color
    });
    this.setState({
      height: "",
      width: "",
      color: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">height</label>
        <input
          type="number"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        ></input>
        <br />

        <label htmlFor="width">width</label>
        <input
          id="width"
          type="number"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        ></input>
        <br />

        <label htmlFor="color">color</label>
        <input
          id="color"
          type="text"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        ></input>
        <br />

        <button>Submit</button>
      </form>
    );
  }
}

export default BoxForm;
