import {
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import Lottie from "lottie-react";
import aboutAnimation from "../../../assets/animation/about-animation.json";

const steps = [
  {
    number: "01",
    title: "Intro",
    icon: (
      <HiOutlineLightBulb className="text-primary w-6 h-6" aria-hidden="true" />
    ),
    description:
      "I am Roni Biswas, a passionate Front-End Developer dedicated to creating sleek, responsive, and user-friendly web experiences.",
  },
  {
    number: "02",
    title: "My Journey",
    icon: (
      <HiOutlineAcademicCap
        className="text-primary w-6 h-6"
        aria-hidden="true"
      />
    ),
    description:
      "My journey started with curiosity about how websites work. I began with HTML & CSS, then dived into TailwindCSS, JavaScript, React, Node.js, Express and MongoDB, constantly learning and improving my skills.",
  },
  {
    number: "03",
    title: "Work I Enjoy",
    icon: (
      <HiOutlineSparkles className="text-primary w-6 h-6" aria-hidden="true" />
    ),
    description:
      "I love designing clean, interactive, and accessible web interfaces, optimizing performance, and solving complex coding challenges with a user-first approach.",
  },
  {
    number: "04",
    title: "What I Love",
    icon: (
      <HiOutlineHeart className="text-primary w-6 h-6" aria-hidden="true" />
    ),
    description:
      "I enjoy traveling, reading tech blogs, and exploring design trends. I also have a strong interest in problem solving.",
  },
  {
    number: "05",
    title: "Personality",
    icon: (
      <HiOutlineUserGroup className="text-primary w-6 h-6" aria-hidden="true" />
    ),
    description:
      "I am a curious learner, creative problem-solver, and team player who thrives on innovation and continuous growth.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-base-300 py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center flex flex-col items-center mb-12">
          <h2
            id="about-heading"
            className="text-3xl md:text-5xl font-extrabold text-primary mb-4"
          >
            About Myself
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-300 max-w-xl">
            Crafting Seamless Web Experiences with Performance, Accessibility,
            and Innovation in Mind
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Lottie Animation */}
          <div
            className="flex-1 w-full max-h-[500px] overflow-hidden"
            aria-hidden="true"
          >
            <Lottie
              animationData={aboutAnimation}
              loop
              className="w-full h-auto"
            />
          </div>

          {/* Right: Cards with steps */}
          <div className="flex-1 w-full px-4 md:px-0" aria-live="polite">
            {steps.map(({ number, title, icon, description }, idx) => (
              <article
                key={idx}
                data-aos="fade-left"
                data-aos-delay={idx * 150}
                tabIndex={0}
                aria-label={`${title} - step ${number}`}
                className="group relative bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-sm p-6 cursor-pointer
    focus:outline-none focus:ring-4 focus:ring-primary/80
    transform transition-transform duration-400 ease-in-out
    hover:scale-[1.04] hover:shadow-xl hover:-translate-y-1 mb-3
    flex flex-col lg:flex-row items-center lg:items-start
  "
              >
                {/* Number circle */}
                <div
                  aria-hidden="true"
                  className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg
      mb-4 lg:mb-0
      lg:absolute lg:-left-10 lg:top-1/2 lg:transform lg:-translate-y-1/2
      flex-shrink-0
      "
                >
                  {number}
                </div>

                {/* Left vertical accent bar */}
                {/* Show only on desktop, hide on mobile */}
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full bg-primary"
                />

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex items-center space-x-4 mb-3 text-primary group-hover:text-secondary transition-colors">
                    <div
                      className="transform transition-transform duration-300 group-hover:rotate-[15deg]"
                      aria-hidden="true"
                    >
                      {icon}
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>

                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {description}
                  </p>

                  {/* Decorative bottom border highlight */}
                  <span className="block h-1 w-20 bg-primary rounded-full mt-6 opacity-40 group-hover:opacity-90 transition-opacity" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
