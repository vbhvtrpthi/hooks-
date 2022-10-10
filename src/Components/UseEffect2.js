import React, { useState, useEffect } from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);
    //Here, it is working as ComponentDidMount
    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`
   
    },[]) //only [] array is added when compared to UseEffect1
    console.log("render");

    return (
        <div>
            <h1>Current Count{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
        </div>
    )
}

export default UseEffect1
