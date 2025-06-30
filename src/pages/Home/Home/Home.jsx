import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "../../Projects/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
