import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiTailwindcss, SiExpress } from "react-icons/si";
import heroImage from "../../../assets/image.png";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa6";

const ICON_SIZE = 48;
const RADIUS = 100;
const ICON_ORBIT_RADIUS = RADIUS + ICON_SIZE / 2 + 20;

const icons = [
  { component: SiExpress, color: "text-white", angle: 270 },
  { component: SiTailwindcss, color: "text-sky-400", angle: 0 },
  { component: SiNodedotjs, color: "text-green-600", angle: 90 },
  { component: SiReact, color: "text-blue-500", angle: 180 },
];

const degToRad = (deg) => (deg * Math.PI) / 180;

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-24 md:py-16">
      {/* Decorative blurred background */}
      <div className="absolute -top-20 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-orange-900 rounded-full opacity-30 blur-2xl" />
      <div className="absolute -bottom-20 -right-32 w-80 h-80 sm:w-96 sm:h-96 bg-yellow-900 rounded-full opacity-30 blur-2xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 pb-24 md:pb-0">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-14"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Roni Biswas <br /> A Full-Stack MERN Developer
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Crafting scalable web apps with modern tech and a touch of
            creativity.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.5,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.a
              href="#portfolio"
              className="bg-primary hover:bg-secondary hover:text-primary text-white font-semibold px-6 py-2 rounded-full shadow transition"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              View Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="border border-primary hover:bg-primary hover:text-white text-primary font-semibold px-6 py-2 rounded-full transition"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 justify-center md:justify-start mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a
              href="https://www.facebook.com/roni.biswas.48"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary text-2xl transition-transform transform hover:scale-125"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/ronibiswas64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary text-2xl transition-transform transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/roni-biswas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary text-2xl transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
          </motion.div>
        </div>

        {/* Right Content (Image + Orbiting Icons) */}
        <motion.div
          className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Soft Circle Border */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full border border-orange-300 dark:border-orange-600"
            style={{
              width: RADIUS * 2 + ICON_SIZE + 40,
              height: RADIUS * 2 + ICON_SIZE + 40,
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Roni Biswas"
            className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-orange-400 dark:border-orange-600"
            style={{ transform: "translate(-50%, -50%)" }}
          />

          {/* Bouncing Icons */}
          {icons.map(({ component: Icon, color, angle }, i) => {
            const rad = degToRad(angle);
            const x = ICON_ORBIT_RADIUS * Math.cos(rad);
            const y = ICON_ORBIT_RADIUS * Math.sin(rad);

            // Only bounce Tailwind (right) and React (left)
            // const shouldBounce = angle === 0 || angle === 180;

            return (
              <motion.div
                key={i}
                className={`absolute top-1/2 left-1/2 ${color}`}
                style={{
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                  marginLeft: -ICON_SIZE / 2,
                  marginTop: -ICON_SIZE / 2,
                }}
                animate={{
                  x: [x, x - 15, x + 10, x],
                  y: [y, y - 15, y - 10, y],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Icon size={ICON_SIZE} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
