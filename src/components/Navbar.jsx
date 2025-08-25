import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // icon
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

import { logout } from "../features/auth/authAPI";
import { images } from "../assets/assets";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইলে toggle করার জন্য
  const [token, setToken] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth); // User state from redux store

  // Logout handler
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // Dispatch logout action
      const action = await dispatch(logout());

      // Check if the action was fulfilled successfully
      if (action.meta.requestStatus === "fulfilled") {
        // Redirect to login page after successful logout
        navigate("/login");
      } else {
        // Handle failed logout here (if necessary)
        toast.error("Logout failed! Please try again.");
      }
    } catch (error) {
      // Catch any errors (like network issues) during logout
      toast.error("Logout failed! Please try again.");
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="">
      <div className="flex items-center justify-between  text-sm mb-5 py-4 border-b border-b-gray-400">
        <img src={images.logo} alt="logo" className="w-20 cursor-pointer" />

        {/* ☰ মোবাইলের জন্য hamburger icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 🖥️ ডেক্সটপের জন্য মেনু */}
        <ul className="hidden items-start gap-5 font-medium md:flex">
          <NavLink to="/" className=" hover:text-yellow-300">
            <li className="py-1">Home</li>

            <hr className="border-none outline-none m-auto h-0.5 bg-primary  w-3/5 hidden" />
          </NavLink>

          <NavLink to="/about" className=" hover:text-yellow-300">
            <li className="py-1">About</li>
            <hr className="border-none outline-none m-auto h-0.5 bg-primary w-3/5 hidden" />
          </NavLink>
          <NavLink to="/doctors" className=" hover:text-yellow-300">
            <li className="py-1">All Doctors</li>

            <hr className="border-none outline-none m-auto h-0.5 bg-primary  w-3/5 hidden" />
          </NavLink>
          <NavLink to="/contact" className=" hover:text-yellow-300">
            <li className="py-1">Contact</li>
            <hr className="border-none outline-none m-auto h-0.5 bg-primary  w-3/5 hidden" />
          </NavLink>

          {!user ? (
            <>
              <li></li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile" className="hover:text-yellow-300">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/leaveTypes" onClick={() => setIsOpen(false)}>
                  leaveTypes
                </Link>
              </li>

              <li>
                <Link to="/leave" className="hover:text-yellow-300">
                  Leave
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-yellow-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img src={images.doc4} alt="" className="w-8 rounded-full" />
              <IoMdArrowDropdown className="w-5" />
              <div className="absolute top-0 right-0 pt-10 mt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-white rounded-lg shadow-md flex flex-col gap-3 p-4 border">
                  <p
                    onClick={() => navigate("my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("my-appointment")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointment
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
              onClick={() => navigate("/login")}
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* 📱 মোবাইল মেনু (slide করে আসে) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 space-y-2 bg-indigo-500 md:hidden"
            onBlur={() => setIsOpen(false)} // Close the menu if clicked outside
            tabIndex="0" // Allow focus so that onBlur works
          >
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/reg" onClick={() => setIsOpen(false)}>
                    Registration
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile" onClick={() => setIsOpen(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/leaveTypes" onClick={() => setIsOpen(false)}>
                    leaveTypes
                  </Link>
                </li>

                <li>
                  <Link to="/leave" onClick={() => setIsOpen(false)}>
                    Leave
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-yellow-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
