import React, { useState } from 'react'

const Statetutorial = () => {
  const [counter,setCounter]=useState(0);
  const [inputValue,setInputvalue]=useState("metro")
  return (
<>
    <div>
      {counter}
      <button onClick={(e)=>{
        setCounter(counter+1)
      }}>Increment</button>
    </div>
    <div>
     <input type="text" placeholder='write something' onChange={(e)=>{
       setInputvalue(e.target.value)
     }} />
     {inputValue}
    </div>
 </>
  )
}

export default Statetutorial