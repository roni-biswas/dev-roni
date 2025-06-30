import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";
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
              : "text-gray-700 dark:text-gray-300 hover:text-secondary"
          }`
        }
      >
        <span className="relative z-10">{link.name}</span>
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

          {/* Slide-in Mobile Menu */}
          <motion.nav
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-base-300/95 backdrop-blur-md shadow-xl z-50 p-6 flex flex-col menu-blur"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Logo + Close */}
            <div className="flex items-center justify-between mb-8">
              <BrandLogo />
              <button
                onClick={onClose}
                className="text-2xl text-gray-300"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col gap-6">
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

            {/* Resume Button at Bottom */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <a
                href="/resume.pdf"
                download
                className="block w-full text-center px-6 py-3 bg-primary text-white rounded-lg font-semibold
                hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md focus:outline-none
                focus:ring-2 focus:ring-primary focus:ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                Resume
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div
      className="fixed w-full z-50
    bg-base-300/100
    md:bg-base-300/70
    md:backdrop-blur-md
    shadow-md
    transition-colors duration-300 ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <BrandLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {renderLinks()}
          <a
            href="/resume.pdf"
            download
            className="ml-6 px-4 py-2 bg-primary text-white rounded-md font-semibold
            hover:bg-secondary hover:text-primary transition-colors duration-300 shadow-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default NavBar;
