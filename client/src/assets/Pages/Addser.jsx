import React, { useState } from "react";
import {useMutation} from '@apollo/client'
import {ADD_USER} from '../../Mutations/Mutation';
import { Get_users } from "../../Queries/query";
import { useNavigate } from "react-router-dom";

const Addser = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [adduser]= useMutation(ADD_USER,{
    variables:{
      name,
      email,
      password
    },
    refetchQueries:[{query:Get_users}]
  })
  const navigate = useNavigate()
  const onSubmit =(e)=>{
e.preventDefault();
if(name===''|| email===''|| password===''){
  alert("please filled all fields")
}
adduser()
navigate('/')
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <form
          action=""
          onSubmit={onSubmit}
          className="flex flex-col w-[320px] mt-[50px] rounded-3xl h-[230px] bg-gray-200 items-center justify-center"
        >
          <input
            placeholder="enter name"
            type="text"
            onChange={(e)=>setname(e.target.value)}
            className="w-[300px] border-b-[1.5px] p-[2px] font-semibold bg-white indent-2 border-solid border-gray-400"
          />
          <input
            placeholder="enter email"
            type="text"
            onChange={(e)=>setemail(e.target.value)}

            className="w-[300px] border-b-[1.5px] p-[2px] font-semibold bg-white indent-2 border-solid border-gray-400 m-5"
          />
          <input
            placeholder="enter password"
            type="text"
            onChange={(e)=>setpassword(e.target.value)}

            className="w-[300px] border-b-[1.5px] p-[2px] font-semibold bg-white indent-2 border-solid border-gray-400"
          />
          <button
            type="submit"
            className="w-[300px] bg-slate-900 text-white rounded-md mt-3 font-bold text-lg"
          >
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default Addser;
