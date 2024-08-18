import React from 'react';
import Task from './Task';

const DisplayTask = ({ tasks, deleteTask,editTask,markAsDone  }) => {
  return (
    <div>
    <div className="add-container">
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          priority={item.priority}
          datetime={item.datetime}
          deleteTask={deleteTask}
          editTask={editTask}
          markAsDone={markAsDone}
          index={index}
        />
      ))}
      </div>
    </div>
  );
};

export default DisplayTask;
