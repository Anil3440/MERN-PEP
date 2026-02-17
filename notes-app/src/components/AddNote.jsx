import React, { useState } from 'react'

const AddNote = () => {
    const [title,setTitle] = useState('');
    const [detail,setDetail] = useState('');
    const[tasks,addTasks] = useState([]);
    function addTask(){
        const tasksArr = [...tasks,{
            title,
            detail
        }]
        addTasks(tasksArr);
        setTitle('');
        setDetail('');
        console.log(tasks);
    };

    function Note({title,detail,idx}){
        return(
            <div className='w-50 h-50 border border-black'>
                {title}
                {detail}
                <button onClick={()=>{
                    const tasksArr = [...tasks];
                    tasksArr.splice(idx,1);
                    addTasks(tasksArr);
                }}>delete</button>
            </div>
        )
    }

  return (
    <div className='flex w-full'>
        <div className='bg-black h-screen w-1/2 text-white p-5'>
          <input type='text' placeholder='Enter the title...' className='border  w-1/2 text-center rounded-lg' value = {title} onChange={(e)=>{setTitle(e.target.value)}} /><br />
          <textarea placeholder='Enter details...' className='w-1/2 h-1/2 border rounded-lg mt-5' value = {detail} onChange={(e)=>{setDetail(e.target.value)}} />
          <button onClick = {addTask}>Add Task</button>
        </div>
        <div className='bg-gray-400 h-screen w-1/2'>
            {
                tasks.map((el,idx)=>{
                    return <Note title={el.title} detail = {el.detail} idx = {idx} />
                })
            }
        </div>
    </div>
    )
}

export default AddNote
