import { createContext, useContext, useState } from "react"

//creating the context
const userContext = createContext();

const ContextApi = () => {
    const [user,setUser] = useState('Anil');

    //PROVIDE CONTEXT
    return (
    <>
        <userContext.Provider value={{user}}>
            <Parent />
        </userContext.Provider>
    </>
    )
}
function Parent(){
    return <Child />;
}
function Child(){
    return <GrandChild />
}
function GrandChild(){
    //CONSUMING CONTEXT
    const consumer = useContext(userContext);
    return <h1>Hello Mr. {consumer.user}</h1>
}

export default ContextApi
