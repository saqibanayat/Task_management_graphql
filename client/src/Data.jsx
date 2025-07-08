import React, { useState } from 'react'
import {gql,useQuery,useLazyQuery, useMutation} from '@apollo/client'
const GET_USER_data =gql`
query getAllUsers{
    users {
        id
        name
        phone
        username
      }
}
`;
const userByID = gql`
query getUserById($userId: ID!){
  user(id: $userId) {
    name
    username
  }
}
`;
const addUser = gql`
  mutation($input: CreateUserInput!){
    createUser(input: $input) {
      name
      username
      phone
    }
  }
`;
const Data = () => {
  const [getUserId, setgetUserId] = useState('') 
  const [name, setname] = useState('') 
  const [username, setusername] = useState('') 
  const [phone, setphone] = useState('') 
  const {data,errro,loading,refetch}=useQuery(GET_USER_data )
  const[fetchUser,{data:userByIdResult}]=useLazyQuery(userByID)
  const[sendUserData]=useMutation(addUser)

    
  return (
    <>
    <div className="">
      <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
      <input type="text" placeholder='username' onChange={()=>setusername(e.target.value)}/>
      <input type="text" placeholder='phone' onChange={()=>setphone(e.target.value)}/>
      <button onClick={()=>{
sendUserData({
  variables:{
    input:{
      name,
username,
phone
    }

  }
})
refetch()
      }}>Add User</button>
    </div>
      <div className="" style={{
    display:'flex',
     gap:'20px',
    
  }}>
    {
      data && data.users.map((item)=>{
        return(
          <div>{`${item.name}  `}</div>
        )
      })
    }
  </div>


  <div className="" style={{
    display:'flex',
   
  }}>
    <input type="text" onChange={(e)=>setgetUserId(e.target.value)} />
    <button onClick={()=>{
      fetchUser({
        variables:{
          userId:getUserId
        }
      })
    }}>get user detail</button>
  </div>
  <div>{userByIdResult?.user?.name}</div>
    </>

  )
}

export default Data