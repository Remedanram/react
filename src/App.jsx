
import './App.css'
import Todo from './components/Todo'
import Tittle from './components/Tittle'
import Popup from './components/Popup'
import Counter from './components/Counter'
function App() {
  

  return <Counter/>


    return (
       <>
        <Tittle/>
        <input type='text'/>
        <button>Add</button>
       
       <Todo task="Finish React Crash Course"
       description="first..."/>
       <Todo task="Finish ASAP "/>
       <Todo task="Land a Junior Job"/>
       <Todo task="Get 100k+"/>
       <Todo task="Enjoy life"/>
      { <Popup tittle="are sure?"/>}
       </>
    
      
  );
}

export default App
