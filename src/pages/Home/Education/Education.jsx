import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import Lottie from "lottie-react";
import educationAnimation from "../../../assets/animation/education-animation.json";

const educationData = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Govt. Rajendra College, Faridpur",
    duration: "2016 - 2020",
    details:
      "Specialized in business management, finance, and leadership. Developed strong analytical and communication skills through academic projects and coursework.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Khoksa Govt. College",
    duration: "2014 - 2016",
    details:
      "Commerce background with major subjects including Accounting, Finance, and Business Organization. Built foundational knowledge in economics and corporate practices.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Khoksa Janipur Pilot High School",
    duration: "2012 - 2014",
    details:
      "Completed secondary education in the Commerce stream. Focused on business studies, general mathematics, and social science.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-br from-base-300 via-[#141414] to-base-300 py-16 px-6 md:px-12 overflow-x-hidden"
      aria-labelledby="education-heading"
    >
      {/* Section Header */}
      <header className="max-w-3xl mx-auto mb-16 text-center">
        <h2
          id="education-heading"
          className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-wide"
          data-aos="fade-up"
        >
          Educational Qualification
        </h2>
        <p
          className="text-base md:text-lg text-gray-300 leading-relaxed tracking-wide"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          My Academic Journey Towards Becoming a Skilled, Innovative, and
          Passionate Developer
        </p>
      </header>

      {/* Layout: Left Lottie | Right Timeline */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Left: Lottie Animation */}
        <div className="flex-1 max-w-md">
          <Lottie animationData={educationAnimation} loop />
        </div>

        {/* Right: Timeline Cards */}
        <div className="flex-1 w-full relative" data-aos="fade-left">
          {/* Vertical Timeline Accent Line */}
          <span className="hidden lg:block absolute left-3 top-0 bottom-0 w-1 bg-primary/70 rounded-full" />
          <div className="space-y-10">
            {educationData.map(
              ({ degree, institution, duration, details }, i) => (
                <article
                  key={i}
                  className="relative bg-gray-800/90 backdrop-blur-md text-base-100
                  rounded-xl shadow-lg p-6 pl-10 border-l-4 border-primary
                  transition-all duration-300 hover:shadow-[0_0_20px_#ff5722aa]
                  hover:-translate-y-1 hover:border-secondary group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-5 top-7 w-4 h-4 rounded-full border-4 border-base-300 bg-primary group-hover:bg-secondary transition" />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3 text-primary group-hover:text-secondary transition-colors">
                    <HiAcademicCap className="w-7 h-7" />
                    <h3 className="text-xl font-semibold tracking-wide">
                      {degree}
                    </h3>
                  </div>

                  {/* Subdetails */}
                  <p className="text-secondary font-semibold">{institution}</p>
                  <p className="text-sm text-gray-400 italic mb-4">
                    {duration}
                  </p>
                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    {details}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
