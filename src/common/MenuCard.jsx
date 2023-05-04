import React from "react";
import { NavLink } from "react-router-dom";

const MenuCard = ({ setShowMenu, showMenu }) => {
  return (
    <div className="bg-gray-400 bg-opacity-40 w-[90%] border-t-2 flex justify-end mx-auto">
      <ul className="px-2 py-4 space-y-3">
        <li className="text-2xl font-medium text-white">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setShowMenu(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="text-2xl font-medium">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "active" : "text-white font-medium"
            }
            onClick={() => setShowMenu(false)}
          >
            Blogs
          </NavLink>
        </li>
        <li className="text-2xl font-medium">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "active" : "text-white font-medium"
            }
            onClick={() => setShowMenu(false)}
          >
            Sign Up
          </NavLink>
        </li>
        <li className="text-2xl font-medium">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "active" : "text-white font-medium"
            }
            onClick={() => setShowMenu(false)}
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuCard;
