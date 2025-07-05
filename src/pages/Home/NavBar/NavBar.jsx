import React, { useState } from "react";
import { FaBars, FaChevronRight, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import BrandLogo from "../../../components/BrandLogo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "top" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Education", path: "education" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  const renderLinks = (className = "") =>
    navLinks.map((link) => (
      <ScrollLink
        key={link.name}
        to={link.path}
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="text-primary font-semibold underline"
        onClick={() => setIsMenuOpen(false)}
        className={`relative px-1 py-2 rounded transition-all duration-300 group cursor-pointer text-gray-700 dark:text-gray-300 hover:text-secondary ${className}`}
      >
        <span className="relative z-10">{link.name}</span>
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
      </ScrollLink>
    ));

  const MobileMenu = ({ isOpen, onClose, className = "" }) => (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.nav
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-base-300/95 backdrop-blur-md shadow-xl z-50 p-6 flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <ScrollLink
                to="top"
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="text-primary font-semibold underline"
                className="cursor-pointer"
              >
                <BrandLogo />
              </ScrollLink>
              <button
                onClick={onClose}
                className="text-2xl text-gray-300"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <ul className="flex flex-col gap-6">
              {navLinks.map(({ name, path }) => (
                <motion.li
                  key={name}
                  className="group flex items-center justify-between cursor-pointer"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <ScrollLink
                    to={path}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="text-primary font-semibold underline"
                    onClick={onClose}
                    className={`relative w-full px-4 py-2 rounded transition-all duration-300 group cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary ${className}`}
                  >
                    {name}
                  </ScrollLink>
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

            {/* Resume */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <a
                href="https://drive.google.com/file/d/1cL092TEbRmOdK8o8GOmgwissVnps8xid/view?usp=sharing"
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
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          offset={-80}
          activeClass="text-primary underline"
          className="cursor-pointer"
        >
          <BrandLogo />
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {renderLinks()}
          <a
            href="https://drive.google.com/file/d/1cL092TEbRmOdK8o8GOmgwissVnps8xid/view?usp=sharing"
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

        {/* Mobile Toggle */}
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

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default NavBar;
