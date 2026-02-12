import React, { useContext } from 'react'
import { dataContext } from '../context/DataProvider';

const DataConsumer = () => {
    const {data,fetchData} = useContext(dataContext);
    console.log(data);
    
  return (
    <div>
        <button onClick={fetchData}>Fetch Data</button>
        {data.loading && <p>Loading...</p>}
        {data.error && <p>Error: {data.error}</p>}
        {data.value && data.value.slice(0,10).map(i=><li key={i.id}>{i.title}</li>)}
    </div>
  )
}

export default DataConsumer
