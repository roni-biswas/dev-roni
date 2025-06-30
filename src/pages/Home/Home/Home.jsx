import React from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
