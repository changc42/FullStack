import React from "react";

class Task extends React.Component {
  static defaultProps = {
    task: { id: 1, text: "default text" },
    removeTask: () => console.log("default"),
    updateTask: () => console.log("default")
  };

  state = {
    isEditing: false,
    text: this.props.task.text
  };

  handleRemove = this.handleRemove.bind(this);
  handleRemove() {
    this.props.removeTask(this.props.task.id);
  }

  handleEdit = this.handleEdit.bind(this);
  handleEdit() {
    let { isEditing } = this.state;
    if (isEditing) this.setState({ isEditing: false });
    else this.setState({ isEditing: true });
  }

  render() {
    let editForm = (
      <form onSubmit={this.props.update}>
        <input value={this.state.text} />
        <button>update</button>
      </form>
    );
    return (
      <div>
        {this.state.isEditing ? editForm : <span>{this.state.text}</span>}

        {this.state.isEditing ? (
          <button onClick={this.handleEdit}>cancel edit</button>
        ) : (
          <button onClick={this.handleEdit}>edit</button>
        )}

        <button onClick={this.handleRemove}>remove</button>
      </div>
    );
  }
}

export default Task;
