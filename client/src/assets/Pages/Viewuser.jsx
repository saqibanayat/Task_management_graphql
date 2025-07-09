import { useQuery } from '@apollo/client'
import React from 'react'
import { Single_users } from '../../Queries/query'
import { useParams } from 'react-router-dom'

const Viewuser = () => {
    const {id}=useParams()
    const {data,loading,error}=useQuery(Single_users,{
        variables:{id}
    })
    console.log("🚀 ~ Viewuser ~ data:", data)
  return (
 <>
 <div className="flex flex-col item-center">
    {!loading && !error && (
        <div className="flex flex-col items-center justify-center h-[300px] bg-gray-200 w-[250px]">
            <h1><span className='font-semibold text-gray-900 m-1'>NAME:</span>{data?.user?.name}</h1>
            <h1><span className='font-semibold text-gray-900 m-1'>EMAIL:</span>{data?.user?.email}</h1>
        </div>
    )}
 </div>
 </>
  )
}

export default Viewuser