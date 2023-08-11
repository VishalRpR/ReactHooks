import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Effectstutorial = () => {
   const[data,setData]=useState("");
   const[count,setCount]=useState(0);

    useEffect(() => {
      axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((response)=>{
        setData(response.data[2].name);
        console.log("API was Called");
      });
    
    },[count]);
    


  return (
    <>
    <div>{data}</div>
    <div>{count}</div>
    <button onClick={()=>{
      setCount(count+1)
    }}>click</button>
    </>
  )
}

export default Effectstutorial