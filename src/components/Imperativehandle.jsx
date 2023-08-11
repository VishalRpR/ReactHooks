import React, { useRef } from 'react'
import Button from './Button'

const Imperativehandle = () => {

  const buttonref=useRef(null);

  return (
    <div>
      <button
      onClick={()=>{
        buttonref.current.alterToogle();
      }} 
      >Button From PArent</button>
      <Button ref={buttonref} />
    </div>
  )
}

export default Imperativehandle