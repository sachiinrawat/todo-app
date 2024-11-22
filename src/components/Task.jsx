import React from "react";
import "./Task.css";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <div className="task-content">
        <p className="task-title">{title}</p>
        <span className="task-description">{description}</span>
      </div>
      <button className="task-button" onClick={() => deleteTask(index)}>
        -
      </button>
    </div>
  );
};

export default Task;
