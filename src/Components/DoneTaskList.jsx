import React from 'react';

const DoneTaskList = ({ tasks }) => {
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
    <div className="done-task-list">
      <h2>Done Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks completed yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task">
            <div className="task-titles">
              <div className="task-info">
                <p className="task-title">{task.title}</p>
                <p className="due-date">Due Date: {task.datetime}</p>
              </div>
              <p className={`title-priority ${getPriorityClass(task.priority)}`}>
                {task.priority}
              </p>
            </div>

            <div className="task-description">
              <span>Description:</span>
              <p>{task.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DoneTaskList;
