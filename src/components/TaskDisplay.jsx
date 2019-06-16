import React from "react";
import Heading from "./heading.jsx";
import StatusDisplay from "./statusdisplay.jsx";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import CachedIcon from "@material-ui/icons/Cached";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export default class TaskDisplay extends React.Component {
  render() {
    return (
      <div>
        {/* Buttons! */}

        <ButtonGroup style={{ marginLeft: "auto" }}>
          <Button onClick={this.props.clearDone}>Clear Done</Button>
          <Button onClick={this.props.clearAll}>Clear All</Button>
        </ButtonGroup>
        {/* Tasks status display */}
        <StatusDisplay tasks={this.props.tasks} />
        {/* The actual Display of it */}
        <br />
        <div>
          {this.props.tasks.map((task, index) => (
            <div key={index} style={{ marginBottom: "2rem" }}>
              {task.type !== "heading" ? (
                // If task is task, do this
                <div>
                  <Card
                    style={{
                      maxWidth: "30rem",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    size="small"
                  >
                    <CardContent>
                      <Typography variant="h4">
                        {task.done ? <strike>{task.value}</strike> : task.value}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Chip
                        label={task.done ? "Reopen" : "Finish"}
                        clickable
                        color={!task.done ? "primary" : "secondary"}
                        deleteIcon={!task.done ? <DoneIcon /> : <CachedIcon />}
                        onDelete={() => this.props.doneTask(index)}
                      />
                      <ButtonGroup
                        style={{ marginLeft: "auto", marginRight: "1rem" }}
                      >
                        <IconButton
                          onClick={() => this.props.shiftUp(index)}
                          disabled={index === 0}
                        >
                          <ExpandLessIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => this.props.shiftDown(index)}
                          disabled={index + 1 === this.props.tasks.length}
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </ButtonGroup>
                      <IconButton
                        color="secondary"
                        onClick={() => this.props.deleteTask(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </div>
              ) : (
                // If the task is a heading, create an h2
                <div
                  style={{
                    maxWidth: "30rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderColor: "black"
                  }}
                >
                  <Heading heading={task.heading} value={task.value} />
                  <br />

                  <ButtonGroup
                    style={{ marginLeft: "auto", marginRight: "1rem" }}
                  >
                    <IconButton
                      onClick={() => this.props.shiftUp(index)}
                      disabled={index === 0}
                    >
                      <ExpandLessIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => this.props.shiftDown(index)}
                      disabled={index + 1 === this.props.tasks.length}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => this.props.deleteTask(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ButtonGroup>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
