import React from 'react';

const Task = ({ title, description, datetime, priority, deleteTask, index, editTask,markAsDone  }) => {

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return ""; 
    }
  };

  return (
    <div className="task">
      <div className="task-titles">
        <div className="task-info">
          <p className="task-title">{title}</p>
          <p className="due-date">Due Date: {datetime}</p>
        </div>
        <p className={`title-priority ${getPriorityClass(priority)}`}>
          {priority}
        </p>
      </div>

      <div className="task-description">
        <span>Description:</span>
        <p>{description}</p>
      </div>
      <div className="task-btn">
        <button className="edit-btn" onClick={() => editTask(index)}>Edit</button>
        <button className="done-btn" onClick={() => markAsDone(index)}>Mark as done</button>
        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
      </div>
      <div className="task-endLine"></div>
    </div>
  );
};

export default Task;
