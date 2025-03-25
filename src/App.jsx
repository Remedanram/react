import './App.css';
import Todo from './components/Todo';
import Tittle from './components/Tittle';
import Popup from './components/Popup';
import { useState } from 'react';

function App() {
  const [PopupOpen, setPopOpen] = useState(false);

  function togglePopup() {
    setPopOpen(true);
    console.log("parent notified");
  }

  function closePopup() {
    setPopOpen(false);
  }

  return (
    <>
      <Tittle />
      <input type='text' />
      <button>Add</button>
      
      <Todo togglePopup={togglePopup} task="Finish React Crash Course" description="first..." />
      <Todo togglePopup={togglePopup} task="Finish ASAP" />
      <Todo togglePopup={togglePopup} task="Land a Junior Job" />
      <Todo togglePopup={togglePopup} task="Get 100k+" />
      <Todo togglePopup={togglePopup} task="Enjoy life" />
      
      {PopupOpen && <Popup tittle="are you sure?" closePopup={closePopup} />}
    </>
  );
}

export default App;
