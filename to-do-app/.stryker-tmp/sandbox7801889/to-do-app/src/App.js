// @ts-nocheck
import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  // State for storing tasks and input value
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler for adding a new task
  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue.trim(), completed: false }]);
      setInputValue('');
    }
  };

  // Event handler for toggling task completion status
  const handleTaskClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Event handler for deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      {/* Title */}
      <h1>My To-Do List</h1>

      {/* Input for adding new tasks */}
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
          >
            {/* Checkbox for toggling task completion */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskClick(index)}
            />
            {/* Task text */}
            <span>{task.text}</span>
            {/* Button for deleting a task */}
            <button onClick={(e) => { e.stopPropagation(); handleDeleteTask(index); }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
