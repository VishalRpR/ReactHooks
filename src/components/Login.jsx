import React from 'react'
import { useContext } from 'react'
import {AppContext} from './Contexttutorial' 

const Login = () => {

  const {setUsername} =useContext(AppContext);
  return (
    <div>
      <input type="text" onChange={(e)=>{
        setUsername(e.target.value)
      }}/>
    </div>
  )
}

export default Login