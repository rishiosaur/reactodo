import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

class StatusDisplay extends React.Component {
  render() {
    let tasks = this.props.tasks.filter(task => task.type !== "heading");
    let tasksdone = tasks.map(task => task.done).filter(task => task).length;
    let tasksleft =
      tasks.length - tasks.map(task => task.done).filter(task => task).length;
    let percent = (tasksdone / tasks.length) * 100;
    return (
      <div>
        <br/>
        <Typography variant="h3" style={{fontWeight: 500}}>
          {tasksdone} done,{" "}
          <span style={{ color: tasksleft > 0 ? "red" : "green" }}>
            {tasksleft} left
          </span>
          . Total: {tasks.length}
          <br />
        </Typography><br/>
        <LinearProgress
          variant="determinate"
          value={percent}
          color={percent === 100 ? "primary" : "secondary"}
        />
      </div>
    );
  }
}

export default StatusDisplay;
