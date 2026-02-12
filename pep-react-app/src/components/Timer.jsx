import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [sec,setSec] = useState(0);
    const[running,setRunning] = useState(false);
    useEffect(()=>{
        if(!running){
            return;
        }
        let id = setInterval(()=>{
            setSec(prev=>prev+1);
        },1000);
        return()=>{
            clearInterval(id);
        }
    },[running]);
    console.log(running);
    
    function toggle(){
        setRunning(!running)
    }
    
  return (
    <div>
      Timer: {sec}<br/>
      <button onClick={toggle}>Start/Stop</button><br/>
      <button onClick={()=>{
        setSec(0);
        running && toggle();
      }}>Reset</button>
    </div>
  )
}

export default Timer
