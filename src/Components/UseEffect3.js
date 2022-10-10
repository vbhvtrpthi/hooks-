import React, { useState, useEffect } from 'react'

function UseEffect3() {
    const [count, setCount] = useState(0);
    const [txt, setText] = useState('')

    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`

    }, [count]) // If we want that useEffect should work for a particular state only at the time of updation (componentDidUpdate) then we can pass that state inside an array, Now useEffect will not work for txt 
    console.log("render");

    return (
        <div>
            <h1>Current Count{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            <input type="text" value={txt} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export default UseEffect3
