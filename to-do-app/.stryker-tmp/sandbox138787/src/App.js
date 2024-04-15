// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    // State for storing tasks and input value
    const [tasks, setTasks] = useState(stryMutAct_9fa48("1") ? ["Stryker was here"] : (stryCov_9fa48("1"), []));
    const [inputValue, setInputValue] = useState(stryMutAct_9fa48("2") ? "Stryker was here!" : (stryCov_9fa48("2"), ''));

    // Event handler for input change
    const handleInputChange = event => {
      if (stryMutAct_9fa48("3")) {
        {}
      } else {
        stryCov_9fa48("3");
        setInputValue(event.target.value);
      }
    };

    // Event handler for adding a new task
    const handleAddTask = () => {
      if (stryMutAct_9fa48("4")) {
        {}
      } else {
        stryCov_9fa48("4");
        if (stryMutAct_9fa48("7") ? inputValue.trim() === '' : stryMutAct_9fa48("6") ? false : stryMutAct_9fa48("5") ? true : (stryCov_9fa48("5", "6", "7"), (stryMutAct_9fa48("8") ? inputValue : (stryCov_9fa48("8"), inputValue.trim())) !== (stryMutAct_9fa48("9") ? "Stryker was here!" : (stryCov_9fa48("9"), '')))) {
          if (stryMutAct_9fa48("10")) {
            {}
          } else {
            stryCov_9fa48("10");
            setTasks(stryMutAct_9fa48("11") ? [] : (stryCov_9fa48("11"), [...tasks, stryMutAct_9fa48("12") ? {} : (stryCov_9fa48("12"), {
              text: stryMutAct_9fa48("13") ? inputValue : (stryCov_9fa48("13"), inputValue.trim()),
              completed: stryMutAct_9fa48("14") ? true : (stryCov_9fa48("14"), false)
            })]));
            setInputValue(stryMutAct_9fa48("15") ? "Stryker was here!" : (stryCov_9fa48("15"), ''));
          }
        }
      }
    };

    // Event handler for toggling task completion status
    const handleTaskClick = index => {
      if (stryMutAct_9fa48("16")) {
        {}
      } else {
        stryCov_9fa48("16");
        const updatedTasks = stryMutAct_9fa48("17") ? [] : (stryCov_9fa48("17"), [...tasks]);
        updatedTasks[index].completed = stryMutAct_9fa48("18") ? updatedTasks[index].completed : (stryCov_9fa48("18"), !updatedTasks[index].completed);
        setTasks(updatedTasks);
      }
    };

    // Event handler for deleting a task
    const handleDeleteTask = index => {
      if (stryMutAct_9fa48("19")) {
        {}
      } else {
        stryCov_9fa48("19");
        const updatedTasks = stryMutAct_9fa48("20") ? [] : (stryCov_9fa48("20"), [...tasks]);
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
      }
    };
    return <div className="App">
      {/* Title */}
      <h1>My To-Do List</h1>

      {/* Input for adding new tasks */}
      <div className="input-container">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add a new task" />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map(stryMutAct_9fa48("21") ? () => undefined : (stryCov_9fa48("21"), (task, index) => <li key={index} className={task.completed ? stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), 'completed') : stryMutAct_9fa48("23") ? "Stryker was here!" : (stryCov_9fa48("23"), '')}>
            {/* Checkbox for toggling task completion */}
            <input type="checkbox" checked={task.completed} onChange={stryMutAct_9fa48("24") ? () => undefined : (stryCov_9fa48("24"), () => handleTaskClick(index))} />
            {/* Task text */}
            <span>{task.text}</span>
            {/* Button for deleting a task */}
            <button onClick={e => {
            if (stryMutAct_9fa48("25")) {
              {}
            } else {
              stryCov_9fa48("25");
              e.stopPropagation();
              handleDeleteTask(index);
            }
          }}>Delete</button>
          </li>))}
      </ul>
    </div>;
  }
}
export default App;