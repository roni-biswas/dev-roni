import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Database", icon: <FaDatabase />, color: "text-purple-400" },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-base-300 via-[#1f1f1f] to-base-300 py-20"
    >
      {/* Optional grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        {/* Section Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
          data-aos="fade-up"
        >
          My Skills
        </h2>
        <p
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The Technologies and Tools I Use to Develop Engaging and Seamless
          Digital Experiences
        </p>

        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10
                hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition group"
              data-aos="zoom-in"
              data-aos-delay={index * 70}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`text-4xl mb-3 group-hover:rotate-[10deg] transition-transform duration-300 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <h3 className="text-base text-gray-100 font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
