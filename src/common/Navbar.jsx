import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className=" bg-gray-400 bg-opacity-40 w-[90%] my-4 px-6 py-2 flex justify-between items-center sticky top-0 rounded-xl">
      <img src={logo} alt="logo" className="h-[60px]" />
      <AiOutlineMenu size={36} className="lg:hidden" />
      <ul className="hidden lg:flex gap-4">
        <li className="text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-2xl border-b-4 text-white font-medium border-cyan-600 border-solid"
                : "text-white font-medium"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-2xl font-medium">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-2xl border-b-4 text-white font-medium border-cyan-600 border-solid hover:text-cyan-500"
                : "text-white font-medium"
            }
          >
            Blogs
          </NavLink>
        </li>
        <li className="text-2xl font-medium">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "text-2xl border-b-4 text-white font-medium border-cyan-600 border-solid"
                : "text-white font-medium"
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
