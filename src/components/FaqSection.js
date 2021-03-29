import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Where Am I Based?">
          <div className="answer">
            <p>Where is my current location?</p>
            <p>
              I am currently based in Kuala Lumpur, Malaysia. However, I am
              willing to relocate for the right opportunity.
            </p>
          </div>
        </Toggle>
        <Toggle title={"How Long Have I Been Coding for?"}>
          <div className="answer">
            <p>When did my programming journey start?</p>
            <p>
              This one is a long winded story and it's best to hear it face to
              face. In short, I dabbled a little bit when I was younger,
              rediscovered it when I was in university and the rest as they say,
              is history!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Is My Background?">
          <div className="answer">
            <p>Did I study CS?</p>
            <p>
              Nope, I am an Electrical and Electronic Engineering major who fell
              in love with the language of computers!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Are My Values?">
          <div className="answer">
            <p>What do I bring to the table?</p>
            <p>
              I believe in a life of never-ending learning. The moment you stop,
              there really is nothing to live for. I'm also a hard-worker who
              spends alot of time perfecting my craft. Finally, I enjoy social
              interactions and love working in a team setting.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
