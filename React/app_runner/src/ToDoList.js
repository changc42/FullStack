import React from "react";
import TaskList from "./TaskList";
import TaskCreator from "./TaskCreator";
import uuid from "uuid/v4";

class ToDoList extends React.Component {
  state = {
    tasks: [
      { id: uuid(), text: "dress the bust" },
      { id: uuid(), text: "do the washing" }
    ]
  };

  addTask = this.addTask.bind(this);
  addTask(task) {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  removeTask = this.removeTask.bind(this);
  removeTask(id) {
    this.setState({ tasks: this.state.tasks.filter(s => s.id !== id) });
  }

  updateTask(id, str) {
    let index = this.state.tasks.map(e => e.id).indexOf(id);
    let newTask = { id: uuid(), text: str };
    this.setState({ tasks: this.state.tasks.splice(index, 1, newTask) });
  }

  render() {
    return (
      <div>
        <h1>React To-Do List!</h1>
        <TaskList
          tasks={this.state.tasks}
          editTask={this.editTask}
          removeTask={this.removeTask}
        />
        <h3>New tasks</h3>
        <TaskCreator addTask={this.addTask} />
      </div>
    );
  }
}

export default ToDoList;
