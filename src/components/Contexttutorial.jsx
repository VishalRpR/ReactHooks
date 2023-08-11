import React, { createContext, useState } from 'react'
import Login from './Login';
import User from './User';

export const AppContext =createContext(null);

const Contexttutorial = () => {

  const[username,setUsername]=useState("");

  return (
    <AppContext.Provider value={{ setUsername, username }}>
      <Login/> <User/>
    </AppContext.Provider>
  )
}

export default Contexttutorial