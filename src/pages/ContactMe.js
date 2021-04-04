import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import github from "../img/github.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";

const ContactMe = () => {
  return (
    <div>
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
      <Footer>
        <motion.footer>
          {/* <motion.h4>Jaggehn 2021</motion.h4> */}
          <motion.ul>
            <motion.li>
              <a
                href="https://github.com/jaggehns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img src={github} alt="github-social" />
              </a>
            </motion.li>
            <motion.li>
              <a
                href="https://www.instagram.com/jaggehn_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img src={instagram} alt="instagram-social" />
              </a>
            </motion.li>
            <motion.li>
              <a
                href="https://www.linkedin.com/in/jaggehn-sivabalan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img src={linkedin} alt="linkedin-social" />
              </a>
            </motion.li>
          </motion.ul>
        </motion.footer>
      </Footer>
    </div>
  );
};

const ContactStyle = styled(motion.div)`
  box-sizing: border-box;
  min-height: 78vh;
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
    background: #282828;
    border: 2px solid;
    color: white;
    border-radius: 1rem;
  }
`;

const Footer = styled(motion.div)`
  position: absolute;
  width: 100%;

  footer {
    background: #282828;
    color: white;
    min-height: 10vh;
    padding: 0% 5%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
  }

  ul {
    flex: 1 1 40rem;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    list-style: none;
  }

  /* h4 {
    flex: 1 1 40rem;
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  } */

  @media (max-width: 1500px) {
    form {
      padding: 0rem;
      width: 100%;
    }
  }
`;

export default ContactMe;
