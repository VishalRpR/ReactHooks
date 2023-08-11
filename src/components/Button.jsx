import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props,ref) => {

  const [toogle,SetToggle]=useState(false);
  useImperativeHandle(ref,()=>({
    alterToogle(){
      SetToggle(!toogle);
    },
    
  }));


  return (
    <div>
     <button>
     Button From Child
     </button>
     {toogle && <span>hello</span>}
    </div>
  )
});

export default Button