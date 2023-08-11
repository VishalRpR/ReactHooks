import React, { useRef } from 'react'

const Reftutorial = () => {

  const inputRef = useRef(null);
  

  return (
    <div>
      <h1>vish</h1>
      <input type="text" placeholder='something' ref={inputRef} />
      <button onClick={()=>{
        inputRef.current.focus();
        console.log(inputRef.current.value);
        inputRef.current.value="";
      
      }}>change name</button>
    </div>
  )
}

export default Reftutorial