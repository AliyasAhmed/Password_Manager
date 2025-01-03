import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        isScrolled ? "bg-[#132D46] shadow-lg" : "bg-transparent"
      } sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="w-auto mx-auto px-6 sm:px-8 lg:px-12 py-4 border-b border-[#191E29] rounded-xl">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-extrabold text-[#01C38D]">
            <NavLink to="/">Mercycare</NavLink>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#01C38D] focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Nav Links for Desktop */}
          <nav className="hidden md:flex gap-10 items-center">
            {["Home", "About", "Service", "Contact", "FAQ", "Blog", "Testimonial"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#01C38D] bg-[#191E29] p-4 rounded-lg shadow-md transition-all"
                    : "text-[#FFFFFF] hover:bg-[#132D46] hover:text-[#01C38D] p-4 rounded-lg transition-all shadow-md"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute left-0 top-16 w-full bg-[#132D46] shadow-lg`}
        >
          <nav className="flex flex-col items-center gap-6">
            {["Home", "About", "Service", "Contact", "FAQ", "Blog", "Testimonial"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#01C38D] bg-[#191E29] p-4 rounded-lg shadow-md transition-all"
                    : "text-[#FFFFFF] hover:bg-[#191E29] hover:text-[#01C38D] p-4 rounded-lg transition-all shadow-md"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;