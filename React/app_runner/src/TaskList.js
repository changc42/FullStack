import React from "react";
import Task from "./Task";
import uuid from "uuid/v4";

class TaskList extends React.Component {
  static defaultProps = {
    tasks: [{ id: uuid(), text: "default 1" }],
    editTask: () => console.log("default"),
    removeTask: () => console.log("default")
  };

  render() {
    const taskArr = this.props.tasks.map(task => (
      <Task
        task={task}
        removeTask={this.props.removeTask}
        editTask={this.props.editTask}
      />
    ));
    return taskArr;
  }
}

export default TaskList;
