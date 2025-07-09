import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="">
        <ul className="flex m-8 bg-gray-200 rounded-md hover:bg-gray-100">
          <Link to={"/adduser"}>
            <li className="ml-4 text-pink-600 hover:tex-gray-900 font-bold">
              Add User
            </li>
          </Link>
          <Link to={"/addtask"}>
            {" "}
            <li className="ml-4 text-pink-600 hover:tex-gray-900 font-bol">
              Add Task
            </li>
          </Link>
          <Link to={"/tasks"}>
            {" "}
            <li className="ml-4 text-pink-600 hover:tex-gray-900 font-bol">
              Tasks
            </li>
          </Link>
          <Link to={"/"}>
            {" "}
            <li className="ml-4 text-pink-600 hover:tex-gray-900 font-bol">
              Home
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
