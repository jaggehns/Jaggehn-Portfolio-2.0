import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import FaqSection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutMe = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <SkillsSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutMe;
