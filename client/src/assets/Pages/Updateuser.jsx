import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Get_users, Single_users } from '../../Queries/query'
import { useNavigate, useParams } from 'react-router-dom'
import { Edit_user } from '../../Mutations/Mutation'

const Updateuser = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate()
    const {id}=useParams()
    const{data,loading,error}=useQuery(Single_users,{
        variables:{id:id}
    })
    const [editUser]=useMutation(Edit_user,{
      variables:{
       id,
      name,
      email 
      },
      refetchQueries:[{query:Get_users}]
      
      
      
    })

    const setdetail = ()=>{
      if(data){
        setname(data.user.name)
        setemail(data.user.email)
        setpassword(data.user.password)
      }
    }
    useEffect(()=>{
setdetail();
    },[data])
    const onSubmit=(e)=>{
e.preventDefault();
editUser()
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
            value={name}
            className="w-[300px] border-b-[1.5px] p-[2px] font-semibold bg-white indent-2 border-solid border-gray-400"
          />
          <input
            placeholder="enter email"
            type="text"
            value={email}
            onChange={(e)=>setemail(e.target.value)}

            className="w-[300px] border-b-[1.5px] p-[2px] font-semibold bg-white indent-2 border-solid border-gray-400 m-5"
          />
          <input
            placeholder="enter password"
            type="text"
            value={password}
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
  )
}

export default Updateuser