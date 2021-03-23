import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactMe = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <h1>My Contact</h1>
    </motion.div>
  );
};

export default ContactMe;
