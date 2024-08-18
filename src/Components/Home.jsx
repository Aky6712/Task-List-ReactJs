import React, { useState, useEffect } from "react";
import { AddNewTask } from "./AddNewTask";
import DisplayTask from "./DisplayTask";
import DoneTaskList from "./DoneTaskList";

export const Home = () => {
  const [show, setShow] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [showDoneTasks, setShowDoneTasks] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);


  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(initialArray);

  // Initialize doneTasks from localStorage
  const initialDoneTasks = localStorage.getItem("doneTasks");
  const [doneTasks, setDoneTasks] = useState(initialDoneTasks ? JSON.parse(initialDoneTasks) : []);

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((_, i) => i !== index);
    setTasks(filteredArr);
  };

  const editTask = (index) => {
    setEditingTask({ ...tasks[index], index });
    setShow(true);
  };


  const markAsDone = (index) => {
    const taskToMove = tasks[index];
    const filteredArr = tasks.filter((_, i) => i !== index);
    setTasks(filteredArr);
    setDoneTasks([...doneTasks, taskToMove]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [doneTasks]);

  const filteredTasks = tasks.filter(task => 
    selectedPriority ? task.priority === selectedPriority : true
  );

  return (
    <div className="App">
      <div className="task-list-header">
        <div className="task-list-title">Task List View</div>
      </div>

      <div className="container">
      
        <div className="task-list-add-button">
          <button className="add-button" onClick={() => setShow(!show)}>
            +
          </button>
          <span>Add New Task</span>
        </div>
          {/* Tasks buttons All high medium low done */}
        <div className="task-buttons-row">
       
          <button className="done-button"  onClick={() => {
              setShowDoneTasks(false);
              setShow(false);
              setSelectedPriority(null);
            }}>
            All Tasks
            </button>

            <button 
            className="done-button" 
            onClick={() => {
              setShowDoneTasks(false);
              setSelectedPriority("High");
            }}>
            High
            </button>
            <button 
            className="done-button"
            onClick={() => {
              setShowDoneTasks(false);
              setSelectedPriority("Medium");
            }}
            >
            Medium
            </button>

            <button 
            className="done-button"
            onClick={() => {
              setShowDoneTasks(false);
              setSelectedPriority("Low");
            }}
            >Low</button>
       

      
        <button className="done-button" onClick={() => setShowDoneTasks(!showDoneTasks)}>
            Done
          </button>
        
        </div>

      
      </div>

      {show && (
        <AddNewTask
          tasks={tasks}
          setTasks={setTasks}
          setShow={setShow}
          editingTask={editingTask}
          setEditingTask={setEditingTask} 
          
        />
      )}

      <div className="task-lists">
      {!showDoneTasks && (
          <DisplayTask 
         
          tasks={filteredTasks} 
          deleteTask={deleteTask} 
          editTask={editTask} 
          markAsDone={markAsDone} />
        )}
        {showDoneTasks && <DoneTaskList tasks={doneTasks} />}
      </div>
    </div>
  );
};
