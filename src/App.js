import React from "react";
import "./App.css";
import Input from "./components/InputTask.jsx";
import TaskDisplay from "./components/TaskDisplay.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.clearDone = this.clearDone.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.shiftUp = this.shiftUp.bind(this);
    this.shiftDown = this.shiftDown.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  // Handle Events
  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input.length > 0) {
      let heading = this.state.input.lastIndexOf("#");
      this.state.input.charAt(0) !== "#"
        ? this.setState({
            tasks: [
              ...this.state.tasks,
              { type: "task", value: this.state.input, done: false }
            ]
          })
        : this.setState({
            tasks: [
              ...this.state.tasks,
              {
                type: "heading",
                value: this.state.input.substring(heading + 1),
                heading: heading + 1
              }
            ]
          });
    }
  }

  // Delete Commands
  clearDone() {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => !task.done);
    this.setState({ tasks: tasks });
  }

  clearAll() {
    let tasks = [...this.state.tasks];
    tasks = [];
    this.setState({ tasks: tasks });
  }

  deleteTask(index) {
    console.log(this.state.tasks);
    let tasks = [...this.state.tasks];

    console.log(index);
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  }

  // Other
  toggleDone(index) {
    // Shallow copies of state
    let tasks = [...this.state.tasks];
    let task = { ...tasks[index] };

    //Modifying shallow copies
    task.done = !task.done;

    tasks[index] = task;

    this.setState({ tasks: tasks });
  }

  change(old_array, old_index, new_index) {
    return old_array.map((item, index, array) => {
      if (index === old_index) return array[new_index];
      else if (index === new_index) return array[old_index];
      else return item;
    });
  }

  shiftUp(index) {
    let tasks = [...this.state.tasks];
    if (index > 0) {
      tasks = this.change(tasks, index, index - 1);
    }
    this.setState({ tasks: tasks });
  }

  shiftDown(index) {
    let tasks = [...this.state.tasks];
    if (index < tasks.length - 1) {
      tasks = this.change(tasks, index, index + 1);
    }
    this.setState({ tasks: tasks });
  }

  render() {
    const {
      handleChange,
      handleSubmit,
      toggleDone,
      clearDone,
      clearAll,
      shiftUp,
      shiftDown,
      deleteTask
    } = this;
    return (
      <div>
        <Input handleChange={handleChange} handleSubmit={handleSubmit} />
        <TaskDisplay
          tasks={this.state.tasks}
          doneTask={toggleDone}
          clearDone={clearDone}
          clearAll={clearAll}
          shiftUp={shiftUp}
          shiftDown={shiftDown}
          deleteTask={deleteTask}
        />
      </div>
    );
  }
}

export default App;
