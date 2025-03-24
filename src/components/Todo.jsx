function Todo({task,description}){
    return(
        <div  className='todo-Item'>
       <h2>{task}</h2>
       <p>{description}</p>
       <button>delete</button>
       </div>
    )

}
export default Todo