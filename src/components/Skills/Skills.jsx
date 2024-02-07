import React from "react";
import {
  Grid,
  CommonSection,
  CommonTitle,
  CommonSubTitle,
} from "../../common/Styles";
import styled from "styled-components";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import AnimatedText from "../AnimatedText";
const Skills = () => {
  return (
    <CommonSection>
     
        <AnimatedText
          text="Skills"
          className=" !text-6xl sm:!text-6xl xs:!text-4xl sm:mb-2 sm:mt-10"
        />
        <AnimatedText
          text="My technical skills"
          className="mb-10 sm:mb-0 !text-2xl  "
        />
     

      <SkillsContainer>
        <FrontEnd />

        <BackEnd />
      </SkillsContainer>
    </CommonSection>
  );
};

export default Skills;

const SkillsContainer = styled(Grid)`
  grid-template-columns: repeat(2, 350px);
  column-gap: 3rem;
  justify-content: center;

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    grid-template-columns: 650px;
    column-gap: 3rem;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    grid-template-columns: 400px;
    column-gap: 5rem;
  }

  /* For medium devices */
  @media screen and (max-width: 576px) {
    /* TODO: does not work */
    grid-template-columns: 1fr;
    margin:1rem;
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;
