import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content py-8 px-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-primary">Roni Biswas</p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/roni-biswas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/roni-biswas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/roni.biswas.48"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/ronibiswas64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
