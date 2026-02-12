import React, { useEffect, useState } from 'react'

const ApiData = () => {
    const [data,setData] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);
                console.log(result);
            }catch(err){
                console.log(err.message);
            }finally{
                setLoading(false);
            } 
        }
        fetchData();
    },[]);

    if (loading){
        return (
            <p>Loading...</p>
        )
    }
  return (
    <div>
        <h1>Fetched Api: </h1>
        <ul>
            {
                data.map(el=>{
                    return <li key={el.id}>{el.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default ApiData
