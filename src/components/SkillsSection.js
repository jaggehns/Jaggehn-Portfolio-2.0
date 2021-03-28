import React from "react";
//Import icons
import html from "../img/html.svg";
import css3 from "../img/css3.svg";
import js1 from "../img/js1.svg";
import react from "../img/react.svg";
import home2 from "../img/home2.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const SkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <Skills
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          My <span>skills.</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={html} />
              <h3>HTML5</h3>
            </div>
            <p>Clean, modern, semantic HTML5.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={css3} />
              <h3>CSS3</h3>
            </div>
            <p>Stylistic, responsive CSS3.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={js1} />
              <h3>JavaScript</h3>
            </div>
            <p>From ES6 to best practices.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={react} />
              <h3>React JS</h3>
            </div>
            <p>This whole website was made on React!</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt="camera" src={home2} />
      </Image>
    </Skills>
  );
};

const Skills = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 22.5rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default SkillsSection;
