import React, { useReducer } from 'react'

const reducer=(state,action)=>{
  switch (action.type){
    case "INcrement":
       return {count: state.count+1,showContent: state.showContent};
    case "changetxt":
      return {count: state.count,showContent: !state.showContent};
    default:
      return state;
  }
};

const Reducertutorial = () => {
  const[state,dispatch]=useReducer(reducer,{count:0,showContent:true})

  return (
    <div>
      {state.count}
     <button onClick={()=>{
      dispatch({type:"INcrement"});
      dispatch({type:"changetxt"});
     }}>Click</button>
     {state.showContent &&<p>this is a text</p>}
    </div>
  )
}

export default Reducertutorial