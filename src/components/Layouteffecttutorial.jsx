import React, { useLayoutEffect,useEffect,useRef } from 'react'

const Layouteffecttutorial = () => {

  const inputRef =useRef(null);

  useLayoutEffect(()=>{
    console.log(inputRef.current.value)
  },[]);


  useEffect(() => {
      inputRef.current.value ="Hello";
  }, []);
  







  return (
    <div>
     <input type="text"  ref={inputRef} value="Vishal" />
    </div>
  )
}

export default Layouteffecttutorial;