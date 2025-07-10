import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { ADD_TASK } from '../../Mutations/Mutation';
import { Get_users, TASK_LIST } from '../../Queries/query';
import { useNavigate } from 'react-router-dom';

const Addtask = () => {
    const [title, settitle] = useState();
    const [description, setdescription] = useState();
    const [user, setuser] = useState();
    const navigate = useNavigate()
    const [addTask] =useMutation(ADD_TASK,{
        variables:
        {
         title,
         description,
         userId:user   
     },
     refetchQueries:[{query:TASK_LIST}]
    })
    const {data,loading,error}= useQuery(Get_users)

    const onSubmit=(e)=>{
        e.preventDefault();
        if(title===''|| description===''|| user===''){
            alert('please filled all fields')
            return;
        }
        addTask();
        navigate('/tasks')
    }
  return (
    <div className="flex flex-col items-center">
    <form
      action=""
      onSubmit={onSubmit}
      className="flex flex-col w-[320px] mt-[50px] rounded-3xl h-[230px] bg-gray-200 items-center justify-center"
    >
      <input
        placeholder="enter title"
        type="text"
        onChange={(e)=>settitle(e.target.value)}
        className="w-[300px] border-b-[1.5px] p-[2px] font-semibold bg-white indent-2 border-solid border-gray-400"
      />
      <input
        placeholder="enter description"
        type="text"
        onChange={(e)=>setdescription(e.target.value)}

        className="w-[300px] border-b-[1.5px] p-[2px] font-semibold bg-white indent-2 border-solid border-gray-400 m-5"
      />
     

<select
              className="bg-gray-700 rounded-md p-1 text-white font-semibold m-1"
              id=""
              onChange={(e) =>{
                 setuser(e.target.value)
               
                }}
            >
              <option value="">Select Option</option>
              {data?.users?.map((v, i) => {
                return (
                  <option key={i} value={v.id}>
                    {v.name}
                  </option>
                );
              })}
            </select>
      <button
        type="submit"
        className="w-[300px] bg-slate-900 text-white rounded-md mt-3 font-bold text-lg"
      >
        Add User
      </button>
    </form>
  </div>
  )
}

export default Addtask