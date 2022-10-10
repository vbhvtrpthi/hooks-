import React, { useState, useEffect } from 'react'

function Infinite() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`
        console.log(`Button clicked ${count} times`);
        
        // setCount(100); //It will not create infinite loop because it compares its present state to previous and if same doesn't renrender it

        // let num=Math.random()*100;
        // setCount(num) // Here it creates infinite loop
    }) 
    console.log("render");

    return (
        <div>
            <h1>Current Count{count}</h1>
            {console.log(`Current Count${ count }`)}
            <button onClick={() => { setCount(count + 1) }}>+1</button>
        </div>
    )
}

export default Infinite
