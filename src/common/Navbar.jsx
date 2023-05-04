/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../providers/AuthProviders";
import Spinner from "./Spinner";
import { toast } from "react-toast";

const Navbar = ({ setShowMenu, showMenu }) => {
  const { loading, user, logOut } = useContext(AuthContext);

  const photoUrl = user?.photoURL;
  const userName = user?.displayName;
  const navigate = useNavigate()

  console.log(photoUrl);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.info("User logged out");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className=" bg-gray-400 bg-opacity-40 w-[90%] mt-4 mx-auto py-2 px-6 flex justify-between items-center sticky top-5 rounded-xl">
      <img src={logo} alt="logo" className="h-[60px]" />
      <AiOutlineMenu
        size={36}
        className="lg:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      <ul className="hidden lg:flex gap-4 lg:items-center">
        <li className="text-2xl font-medium">
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
        {user ? (
          <>
            <li>
              {photoUrl ? (
                <div
                  className="w-10 h-10 bg-gray-400 rounded-full"
                  title={userName}
                >
                  <img src={photoUrl} alt="" />
                </div>
              ) : (
                <p className="text-base font-bold text-white">{userName}</p>
              )}
            </li>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              onClick={handleLogout}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <li className="text-2xl font-medium">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-2xl border-b-4 text-white font-medium border-cyan-600 border-solid hover:text-cyan-500"
                    : "text-white font-medium"
                }
              >
                Login
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
          </>
        )}
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          type="submit"
        >
          {loading ? <Spinner /> : "Log out"}
        </button> */}
      </ul>
    </nav>
  );
};

export default Navbar;
