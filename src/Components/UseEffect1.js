import React,{useState,useEffect}from 'react'

function UseEffect1() {
    const [count,setCount]=useState(0);
    //Here useEffect is working as componentDidMount as well as componentDidUpdate
    useEffect(()=>{
        console.log("useEffect");
        document.title=`Button clicked ${count} times`
        //Side effects wala work
    })
    console.log("render");

    return (
        <div>
            <h1>Current Count{count}</h1>
            {console.log(`Current Count ${count}`)}
            <button onClick={()=>{setCount(count+1)}}>+1</button>
        </div>
    )
}

export default UseEffect1
