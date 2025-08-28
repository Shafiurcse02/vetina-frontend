import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

import { logout } from "../features/auth/authAPI";
import { images } from "../assets/assets";
import { setLoginForm } from "../features/auth/toggleLoginSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.userR);

  const handleGoLogin = () => {
    dispatch(setLoginForm(true));
    setIsOpen(false);
    navigate("/login");
  };

  const handleGoRegister = () => {
    dispatch(setLoginForm(false));
    setIsOpen(false);
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      dispatch(setLoginForm(true));
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout করতে সমস্যা হয়েছে!");
    }
  };

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "All Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b border-gray-400 mb-5 py-4">
      <div className="flex items-center justify-between px-4 md:px-8">
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo center */}
        <Link to="/" className="flex-shrink-0 mx-3 md:mx-0 ">
          <img
            src={images.logo}
            alt="logo"
            className="w-20 md:w-28 cursor-pointer rounded-2xl"
          />
        </Link>

        {/* Desktop: Menus centered */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-6 font-medium">
          {menuLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1 ${
                  isActive ? "text-yellow-600" : "hover:text-yellow-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          {!isAuthenticated ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `relative py-1 ${
                  isActive ? "text-yellow-600" : "hover:text-yellow-400"
                }`
              }
              onClick={handleGoLogin}
            >
              Login
            </NavLink>
          ) : (
            <>
              <NavLink to="/my-profile" className="hover:text-yellow-300">
                Profile
              </NavLink>
              <button onClick={handleLogout} className="hover:text-yellow-300">
                Logout
              </button>
            </>
          )}
        </ul>

        {/* Right: Create Account / Profile */}
        <div className="flex items-center gap-4 ml-auto">
          {!isAuthenticated ? (
            <button
              onClick={handleGoRegister}
              className="bg-primary text-white px-4 py-2 rounded-full font-light"
            >
              Create Account
            </button>
          ) : (
            <div className="relative group cursor-pointer hidden md:flex">
              <img src={images.doc4} alt="" className="w-8 rounded-full" />
              <IoMdArrowDropdown className="w-5" />
              <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-lg p-4 hidden group-hover:block z-20">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <button
                  onClick={handleLogout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Left-Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              drag="x"
              dragConstraints={{ left: -300, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(event, info) => {
                if (info.point.x < 50) setIsOpen(false);
              }}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-indigo-500 z-50 p-6 flex flex-col md:hidden"
            >
              {/* Logo at top */}
              <div className="mb-6 flex items-center justify-center">
                <Link to="/" className="flex-shrink-0">
                  <img
                    src={images.logo}
                    alt="logo"
                    className="w-20 md:w-28 cursor-pointer rounded-2xl"
                    onClick={() => setIsOpen(false)}
                  />
                </Link>
              </div>

              {/* Menu Links */}
              <ul className="flex flex-col gap-4">
                {menuLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative py-1 ${
                        isActive ? "text-yellow-600" : "hover:text-yellow-400"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}

                {!isAuthenticated ? (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `relative py-1 ${
                        isActive ? "text-yellow-600" : "hover:text-yellow-400"
                      }`
                    }
                    onClick={handleGoLogin}
                  >
                    Login
                  </NavLink>
                ) : (
                  <>
                    <NavLink to="/my-profile" className="hover:text-yellow-300">
                      Profile
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="hover:text-yellow-300"
                    >
                      Logout
                    </button>
                  </>
                )}
              </ul>
            </motion.div>{" "}
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
