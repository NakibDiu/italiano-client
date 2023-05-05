import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Spinner from "./Spinner";
import { toast } from "react-toast";

const MenuCard = ({ setShowMenu, showMenu }) => {
  const { user, loading, logOut } = useContext(AuthContext);

  const photoUrl = user?.photoURL;
  const userName = user?.displayName || "no name set";

  const navigate = useNavigate()

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
    <div className="bg-gray-400 bg-opacity-40 w-[90%] border-t-2 flex justify-end mx-auto">
      <ul className="px-2 py-4 space-y-3 w-full">
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
        {/* if user is not there */}
        {!user ? (
          <>
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
          </>
        ) : (
          <>
            <div className="w-full">
              {loading ? (
                <Spinner />
              ) : (
                <div
                  className="h-10 w-10 bg-gray-300 rounded-full cursor-pointer"
                  title={userName}
                >
                  <img
                    src={photoUrl}
                    className="h-10 w-10 rounded-full cursor-pointer"
                    alt={userName}
                  />
                </div>
              )}
              {!photoUrl && (
                <div>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      <h4 className="text-white">{userName}</h4>
                    </>
                  )}
                </div>
              )}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              onClick={handleLogout}
            >
              {loading ? <Spinner /> : "Log out"}
            </button>
          </>
        )}
      </ul>
    </div>
  );
};

export default MenuCard;
