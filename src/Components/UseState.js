import React,{useState} from 'react'

function UseState() {
    console.log("Outer of return called");
    const [count,setCount]=useState(0);
    console.log("count",count);
    const [obj,setObj]=useState({msg:"hello"})
    return (
        <div>
            <h1>Current Count {count}</h1>
            {console.log("return called")}
            <button onClick={()=>setCount(count+1)}>+1</button>
            {console.log("msg after clicking")}
            <h2>{obj.msg}</h2>
        </div>
    )
}

export default UseState
