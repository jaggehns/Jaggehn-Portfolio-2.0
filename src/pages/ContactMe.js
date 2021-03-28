import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const ContactMe = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.form action="https://formspree.io/f/mwkwdlke" method="POST">
        <label htmlFor="name">Name</label>
        <motion.input type="text" name="name" id="name" required />
        <label htmlFor="email">Email</label>
        <motion.input type="email" name="_replyto" id="email" required />
        <label htmlFor="message">Message</label>
        <motion.textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></motion.textarea>
        <motion.button value="Send" type="submit">
          Submit
        </motion.button>
      </motion.form>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  box-sizing: border-box;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 3rem;
  form {
    font-size: 1.3rem;
    padding: 10rem 10rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 2rem;
  }
  input {
    margin: 2rem;
    height: 2.5rem;
    width: 30rem;
  }
  textarea {
    margin: 2rem;
    width: 30rem;
  }
  button {
    width: 100%;
    padding: 2rem;
    background: #154353;
    color: white;
    border-radius: 1rem;
  }
  @media (max-width: 1500px) {
    form {
      padding: 0rem;
      width: 100%;
    }
  }
`;

export default ContactMe;
