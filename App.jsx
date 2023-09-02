import React, { useCallback, useEffect, useState } from 'react'
import CompA from './CompA';

export default function App() {
  const [count,setCount]=useState(0);
  
 
  const increase=()=>{
    setCount(count+1)
  }
  const learning=useCallback(()=>{

  },[])

  
  return (
    <div>
      <CompA Learning={learning}/>
      <h1>Count Increases {count} times</h1>
      <button onClick={increase} >Increase</button>
     
      
    </div>
  )
}
