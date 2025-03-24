import { use, useState } from "react"

function Counter(){
            const[count,setCount]=useState(0)

    return(
        <div className="counter__item">
            <h2>Counter: {count}</h2>
            <button onClick={()=> {
                setCount((prevCount)=>prevCount + 1);
                setCount((prevCount)=>prevCount + 1);

            }}>Increment</button>
            <button onClick={()=> {
                setCount((prevCount)=>prevCount - 1)
                setCount((prevCount)=>prevCount - 1)
                }}>Decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>

        </div>
    )
}
export default Counter