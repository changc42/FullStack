import React from "react";
import BoxForm from "./BoxForm";
import BoxList from "./BoxList";
import uuid from "uuid/v4";

class BoxApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          id: uuid(),
          height: 100,
          width: 100,
          color: "red"
        },
        {
          id: uuid(),
          height: 200,
          width: 200,
          color: "yellow"
        },
        {
          id: uuid(),
          height: 150,
          width: 150,
          color: "purple"
        }
      ]
    };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(box) {
    this.setState({ boxes: [...this.state.boxes, box] });
  }

  removeBox(id) {
    let { boxes } = this.state;
    let index = boxes.map(e => e.id).indexOf(id);
    boxes.splice(index, 1);
    this.setState({ boxes: boxes });
  }

  render() {
    return (
      <div>
        <h1>Box maker thingy</h1>
        <BoxForm addBox={this.addBox} />
        <BoxList boxes={this.state.boxes} removeBox={this.removeBox} />
      </div>
    );
  }
}

export default BoxApp;
