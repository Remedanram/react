import React from 'react';
import '../styles/Todo.css';

function Todo({ task, description,addDescription, completed, togglePopup, toggleComplete }) {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div className="todo-text" onClick={toggleComplete}>
        <h2>{task}</h2>
        <p>{description}</p>
        <p>{addDescription}</p>
      </div>
      <button onClick={togglePopup}>Delete</button>
    </div>
  );
}

export default Todo;
