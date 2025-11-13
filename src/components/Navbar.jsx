import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ThemeToggle from "../components/ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          StudyMate
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-indigo-500">
          Home
        </Link>
        <Link to="/find-partners" className="hover:text-indigo-500">
          Find Partners
        </Link>
        {user ? (
          <>
            <Link to="/create-profile" className="hover:text-indigo-500">
              Create Partner Profile
            </Link>
            <Link to="/my-connections" className="hover:text-indigo-500">
              My Connections
            </Link>
            <div className="relative">
              <img
                onClick={() => setOpenDropdown(!openDropdown)}
                src={user.photoURL || "https://i.ibb.co/profile-example.jpg"}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              {openDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 shadow-lg rounded-md overflow-hidden">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-600"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-indigo-500">
              Login
            </Link>
            <Link to="/register" className="hover:text-indigo-500">
              Register
            </Link>
          </>
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
