import './App.css';
import Todo from './components/Todo';
import Tittle from './components/Tittle';
import Popup from './components/Popup';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home '
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/Navbar';
function App() {
  return(
    <Router>
     <Nav/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
  )



  // State to manage popup visibility
  const [popupOpen, setPopupOpen] = useState(false);
  
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to hold new task input
  const [newTask, setNewTask] = useState('');
  
  // State to hold new task description input
  const [newDescription, setNewDescription] = useState('');


  const [addDescription, setAddDescription] = useState('');
  
  // State to track which task should be deleted
  const [taskToDelete, setTaskToDelete] = useState(null);

  /**
   * Load tasks from local storage when the app starts
   * Runs only once when the component mounts ([] dependency array)
   */
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  /**
   * Save tasks to local storage whenever the task list changes
   */
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Opens the delete confirmation popup and sets the task to be deleted
   */
  function togglePopup(task) {
    setPopupOpen(true);
    setTaskToDelete(task);
  }

  /**
   * Closes the delete confirmation popup and resets the taskToDelete
   */
  function closePopup() {
    setPopupOpen(false);
    setTaskToDelete(null);
  }

  /**
   * Deletes a task from the list and closes the popup
   */
  function deleteTask() {
    setTasks(tasks.filter(t => t.id !== taskToDelete.id));
    closePopup();
  }

  /**
   * Adds a new task to the list with a unique ID and clears the input fields
   */
  function addTask() {
    if (newTask.trim() === '' || newDescription.trim() === '' || addDescription.trim()==='') return; // Prevent adding empty tasks
    
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1; // Generate unique ID
    setTasks([...tasks, { id: newId, task: newTask, description: newDescription,  addDescription: addDescription,completed: false }]);

    // Clear input fields after adding a task
    setNewTask('');
    setNewDescription('');
    setAddDescription('');
  }

  /**
   * Toggles the completion status of a task
   */
  function toggleComplete(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="app-container">
      {/* App title */}
      <Tittle text="My Todo List" />

      {/* Task input section */}
      <div className="task-input">
        <input 
          type="text" 
          placeholder="Enter Task" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Enter Description" 
          value={newDescription} 
          onChange={(e) => setNewDescription(e.target.value)} 
        />
        <input
        type="text"
        placeholder='add more description'
        value={addDescription}
        onChange={(e)=>setAddDescription(e.target.value)}
          />
        <button onClick={addTask}>Add</button>
      </div>

      {/* List of todos */}
      <div className="todo-list">
        {tasks.map(task => (
          <Todo 
            key={task.id}
            task={task.task}
            description={task.description}
            addDescription={task.addDescription}
            completed={task.completed}
            togglePopup={() => togglePopup(task)} // Pass function to handle delete
            toggleComplete={() => toggleComplete(task.id)} // Pass function to toggle complete
          />
        ))}
      </div>

      {/* Confirmation popup for deleting a task */}
      {popupOpen && (
        <Popup 
          title="Are you sure you want to delete this task?" 
          closePopup={closePopup} 
          confirmAction={deleteTask} 
        />
      )}
    </div>
  );
}


export default App;
