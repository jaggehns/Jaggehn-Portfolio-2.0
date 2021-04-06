import React from "react";
import jaggehn2 from "../img/jaggehn2.png";
import { Link } from "react-router-dom";
//Styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi, my name is</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Jaggehn.</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          I'm a Front-End Developer specializing in HTML, CSS, JavaScript and
          React JS.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={jaggehn2} alt="me" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
