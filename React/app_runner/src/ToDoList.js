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

  updateTask = this.updateTask.bind(this);
  updateTask(task) {
    let index = this.state.tasks.map(e => e.id).indexOf(task.id);
    let newTask = { id: task.id, text: task.text };
    this.state.tasks.splice(index, 1, newTask)
    console.log(this.state.tasks);
    this.setState({ tasks: this.state.tasks });
  }

  render() {
    return (
      <div>
        <h1>React To-Do List!</h1>
        <TaskList
          tasks={this.state.tasks}
          updateTask={this.updateTask}
          removeTask={this.removeTask}
        />
        <h3>New tasks</h3>
        <TaskCreator addTask={this.addTask} />
      </div>
    );
  }
}

export default ToDoList;
