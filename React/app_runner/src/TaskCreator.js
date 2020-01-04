import React from "react";
import uuid from "uuid/v4";

class TaskCreator extends React.Component {
  static defaultProps = {
    addTask: () => console.log("default")
  };
  state = {
    newTask: ""
  };
  handleChange = this.handleChange.bind(this);
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = this.handleSubmit.bind(this);
  handleSubmit(e) {
    e.preventDefault();
    let task = { id: uuid(), text: this.state.newTask };
    this.props.addTask(task);
    this.setState({ newTask: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter New task here</label>
        <input
          name="newTask"
          type="text"
          placeholder="Ex: Walk the dog"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TaskCreator;
