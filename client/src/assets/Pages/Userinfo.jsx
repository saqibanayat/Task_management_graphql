import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DELETE_USER } from "../../Mutations/Mutation";
import { useNavigate } from "react-router-dom";
import { Get_users } from "../../Queries/query";

const Userinfo = ({ user  }) => {
  const [options, setoptions] = useState(["Delete", "update", "view"]);
  const navigate = useNavigate();
  const [deleteuser] = useMutation(DELETE_USER, {
    variables: { id: user.id },
    refetchQueries:[{query:Get_users}]
  });

  const handleChange = (e) => {
    if (e.target.value === "Delete") {
      deleteuser();
    
    } else if (e.target.value === "update") {
      navigate(`/edituser/${user.id}`);
    } else {
      navigate(`/viewuser/${user.id}`);
    }
  };
  return (
    <>
      <hr className="bg-black card" />
      <div className="">
        <ul className="flex">
          <li className="ml-4 mt-1 p-2">{user.name}</li>
          <li className="ml-4 mt-1 p-2">{user.email}</li>
          <li className="ml-4 mt-1 p-2">
            <select
              className="bg-gray-700 rounded-md p-1 text-white font-semibold m-1"
              id=""
              onChange={(value) => handleChange(value)}
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
};

export default Userinfo;
