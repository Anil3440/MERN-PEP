import React, { createContext,useState } from 'react'

//1. CREATE CONTEXT
export const dataContext = createContext();
const DataProvider = ({children}) => {
    const [data,setData] = useState({
        loading: false,
        error: null,
        value: null
    });

    async function fetchData(){
        setData({...data,loading: true});
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await res.json();
            setData({...data,loading: false,value: result});
        }catch(err){
            setData({...data,loading: false,value: null,error: err.message});
        }
    }

  return (
    //PROVIDE CONTEXT
    <>
        <dataContext.Provider value={{data,fetchData}}>
        {children}
        </dataContext.Provider>
    </>
  )
}

export default DataProvider
