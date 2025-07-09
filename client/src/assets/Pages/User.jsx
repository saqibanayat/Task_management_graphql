import React from "react";
import { Get_users } from "../../Queries/query";
import { useQuery } from "@apollo/client";
import Userinfo from "./Userinfo";

const User = () => {
  const { data, loading, error } = useQuery(Get_users);
  
  return (
    <>
      <div className="mt-20 mb-5">
        <ul className="flex text-black font-bold text-lg">
          <li className="ml-4">Name</li>
          <li className="ml-20">Email</li>
          <li className="ml-20">Action</li>
        </ul>
      </div>
      {!loading &&
        !error &&
        data?.users?.map((item) => {
          return (
            <>
              <Userinfo
                user={item}
              
              />
            </>
          );
        })}
    </>
  );
};

export default User;
