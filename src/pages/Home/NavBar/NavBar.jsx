import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";
import ThemeToggle from "../../../components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "../../../components/BrandLogo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // renderLinks takes optional className to add to links
  const renderLinks = (className = "") =>
    navLinks.map((link) => (
      <NavLink
        key={link.name}
        to={link.path}
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `relative px-4 py-2 rounded transition-all duration-300 ${className} group ${
            isActive
              ? "text-primary font-semibold"
              : "text-gray-700 hover:text-secondary"
          }`
        }
      >
        <span className="relative z-10">{link.name}</span>
        {/* Hover underline */}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
      </NavLink>
    ));

  const MobileMenu = ({ isOpen, onClose, className = "" }) => (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sliding menu from left */}
          <motion.nav
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-base-300 shadow-lg z-50 p-6 flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between mb-8">
              {/* Logo */}
              <BrandLogo />
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  className="text-2xl text-gray-300"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <ul className="flex flex-col gap-6 flex-grow">
              {navLinks.map(({ name, path }) => (
                <motion.li
                  key={name}
                  className="group flex items-center justify-between cursor-pointer"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <NavLink
                    to={path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `relative w-full px-4 py-2 rounded transition-all duration-300 ${className} group ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                  <motion.span
                    className="text-primary"
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 8 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaChevronRight />
                  </motion.span>
                </motion.li>
              ))}
            </ul>

            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download
              className="mt-8 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-center
              hover:bg-primary-dark transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Resume
            </a>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="bg-base-300 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <BrandLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {renderLinks()}
          <div className="-mr-6">
            <ThemeToggle />
          </div>
          <a
            href="/resume.pdf"
            download
            className="ml-6 px-4 py-2 bg-primary text-white rounded-md font-semibold
            hover:bg-primary-dark transition-colors duration-300 shadow-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Right Controls for mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-2xl text-gray-300"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Slide-in Mobile Menu - From Left */}
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default NavBar;
