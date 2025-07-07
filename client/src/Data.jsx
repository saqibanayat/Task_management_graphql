import React from 'react'
import {gql,useQuery} from '@apollo/client'
const GET_USER_data =gql`
query getAllUsers{
    users {
        id
        name
        phone
        username
      }
}
`
const Data = () => {
    const {data,errro,loading}=useQuery(GET_USER_data )
    console.log("🚀 ~ Data ~ data:", data)
    
  return (
    <div>Data</div>
  )
}

export default Data