import React, { useState } from 'react'

const InputComponent = () => {
    const[inputText, setText] = useState('Welcome type some text');

    function handleChange(e){
        setText(e.target.value)
    }
    return (
        <>
            <input value={inputText} onChange={handleChange}/>
            <p>You typed : {inputText}</p>
            <button onClick={() => setText('Type some text')}>Reset</button>
        </>
    )
}

export default InputComponent