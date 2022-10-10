//Why we do Immutable changes in React
import React, { useState, useEffect } from 'react'

function WhyImmutable() {
    const [count, setCount] = useState(0);
    const [txt, setText] = useState({ msg: '' })

    useEffect(() => {
        console.log("useEffect");
        document.title = `Button clicked ${count} times`

    }, [count])
    let changeText = (e) => {
        txt.msg = e.target.value;
        console.log(txt);
        setText(txt) // state will not rerender as address is not changed

        // setText({ ...txt }) //now state will rerender as we are passing different address using spread operator
    }
    console.log('render');
    return (
        <div>
            <h1>Current Count{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            <input type="text" value={txt.msg} onChange={(e) => changeText(e)} />
        </div>
    )
}

export default WhyImmutable
