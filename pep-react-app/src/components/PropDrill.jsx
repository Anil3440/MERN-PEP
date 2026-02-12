import { useState } from "react";

const PropDrill = () => {
    const[user,setUser] = useState('Anil');

    return (
    <div>
        <Parent user={user}/>
    </div>
    )
}
function Parent({user}){
  return <Child user={user} />;
}
function Child({user}){
  return <GrandChild user={user} />;
}
function GrandChild({user}){
  return <h1>Hello i am {user}</h1>
}

export default PropDrill
