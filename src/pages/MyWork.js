import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import travelly from "../img/travelly.png";
import coloors from "../img/coloors.png";
import elena from "../img/elena.png";
import photon from "../img/photon.png";
import fb from "..//img/fb.png";
import covid from "..//img/covid.png";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Travelly</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/travelly">
          <Hide>
            <motion.img variants={photoAnim} src={travelly} alt="travelly" />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Elena Joy</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/elena">
          <img src={elena} alt="elena" />
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Coloors</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/coloors">
          <img src={coloors} alt="coloors" />
        </Link>
      </Project>
      <Project
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>FB Messenger Clone</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/fbclone">
          <img src={fb} alt="fb" />
        </Link>
      </Project>
      <Project
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <h2>COVID-19 Tracker</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/covidtracker">
          <img src={covid} alt="covid" />
        </Link>
      </Project>
      <Project
        ref={element5}
        variants={fade}
        animate={controls5}
        initial="hidden"
      >
        <h2>Photon</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/photon">
          <img src={photon} alt="photon" />
        </Link>
      </Project>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default MyWork;
