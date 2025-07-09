import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { TASK_LIST } from '../../Queries/query'
import { useNavigate } from 'react-router-dom';
import { DELETE_TASK } from '../../Mutations/Mutation';

const TaskList = () => {
    const [options, setoptions] = useState(["Delete", "update", "view"]);
    const [selectedItemId, setselectedItemId] = useState()
    console.log("🚀 ~ TaskList ~ selectedItemId:", selectedItemId)
    const navigate = useNavigate();
    const {data,loading,error}=useQuery(TASK_LIST)
    const [deleteTask]=useMutation(
        DELETE_TASK)


    const handleChange = (e,id) => {
        console.log("🚀 ~ handleChange ~ id:", id)
        if (e.target.value === "Delete") {
          deleteTask({
            variables:{
                id:id
            },
              refetchQueries:[{query:TASK_LIST}]
          });
        
        } else if (e.target.value === "update") {
          navigate(`/edittask/${id}`);
        } else {
          navigate(`/viewtask/${id}`);
        }
      };
  return (
   <>
      <div className="mt-20 mb-5">
        <ul className="flex text-black font-bold text-lg">
          <li className="ml-4">Title</li>
          <li className="ml-20">Description</li>
          <li className="ml-20">Created By</li>
          <li className="ml-20">Actions</li>
        </ul>
      </div>
      {!loading &&
        !error &&
        data?.tasks?.map((item) => {
          return (
            <>
              <hr className="bg-black card" />
      <div className="">
        <ul className="flex">
          <li className="ml-4 mt-1 p-2">{item?.title}</li>
          <li className="ml-20 mt-1 p-2">{item?.description}</li>
          <li className="ml-20 mt-1 p-2">{item.user?.name}</li>
          <li className="ml-20 mt-1 p-2">
            <select
              className="bg-gray-700 rounded-md p-1 text-white font-semibold m-1"
              id=""
              onChange={(value) =>{
                 handleChange(value,item.id)
               
                }}
            >
              <option value="">Select Option</option>
              {options?.map((v, i) => {
                return (
                  <option key={i} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
          </li>
        </ul>
      </div>
            </>
          );
        })}
   </>
  )
}

export default TaskList