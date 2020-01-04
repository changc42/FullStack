import React from "react";

class Task extends React.Component {
  static defaultProps = {
    task: { id: 1, text: "default text" },
    removeTask: () => console.log("default"),
    updateTask: () => console.log("default")
  };

  state = {
    isEditing: false,
    task: this.props.task,
  };

  handleRemove = this.handleRemove.bind(this);
  handleRemove() {
    this.props.removeTask(this.props.task.id);
  }

  switchEditState = this.switchEditState.bind(this);
  switchEditState() {
    let { isEditing } = this.state;
    if (isEditing) this.setState({ isEditing: false });
    else this.setState({ isEditing: true });
  }

  handleChange = this.handleChange.bind(this);
  handleChange(evt){
    this.setState({task: {id: this.state.task.id, text:evt.target.value}});
  }

  handleUpdate = this.handleUpdate.bind(this);
  handleUpdate(e){
    e.preventDefault();
    this.props.updateTask(this.state.task);
    this.switchEditState();
  }

  render() {
    let whenEditing = (
      <span>
        <form onSubmit={this.handleUpdate}>
          <input value={this.state.task.text} onChange={this.handleChange}/>
          <button>update</button>
        </form>
        <button onClick={this.switchEditState}>cancel edit</button>
      </span>
    );

    let whenNotEditing = (
      <span>
        <span>{this.props.task.text}</span>
        <button onClick={this.switchEditState}>edit</button>
      </span>
    );
    return (
      <div>
        {this.state.isEditing ? whenEditing : whenNotEditing}

        <button onClick={this.handleRemove}>remove</button>
      </div>
    );
  }
}

export default Task;
