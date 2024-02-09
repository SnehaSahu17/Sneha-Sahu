import React from "react";
import {
  Grid,
  CommonSection,
  CommonTitle,
  CommonSubTitle,
} from "../../common/GlobalStyles";
import styled from "styled-components";
import AnimatedText from "../AnimatedText";
import {
  SkillContent,
  SkillTitle,
  SkillBox,
  SkillGroup,
  SkillData,
  SkillName,
  SkillLevel,
} from "./styles";
import { Check } from "../Icons";

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
        {/* Frontend */}
        <SkillContent>
          <SkillTitle>Front-end Developer</SkillTitle>

          <SkillBox>
            <SkillGroup>
              <SkillData>
                <Check />
                <div>
                  <SkillName>HTML</SkillName>
                  <SkillLevel>Advanced</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>TailwindCSS</SkillName>
                  <SkillLevel>Advanced</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>JavaScript</SkillName>
                  <SkillLevel>Advanced</SkillLevel>
                </div>
              </SkillData>
            </SkillGroup>

            <SkillGroup>
              <SkillData>
                <Check />
                <div>
                  <SkillName>Git</SkillName>
                  <SkillLevel>Advanced</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>React</SkillName>
                  <SkillLevel>Advanced</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>NEXTJS</SkillName>
                  <SkillLevel>Advanced</SkillLevel>
                </div>
              </SkillData>
            </SkillGroup>
          </SkillBox>
        </SkillContent>

        {/* Backend */}
        <SkillContent>
          <SkillTitle>Back-end Developer</SkillTitle>

          <SkillBox>
            <SkillGroup>
              <SkillData>
                <Check />
                <div>
                  <SkillName>Express</SkillName>
                  <SkillLevel>Intermediate</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>Node Js</SkillName>
                  <SkillLevel>Intermediate</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>MySQL</SkillName>
                  <SkillLevel>Basic</SkillLevel>
                </div>
              </SkillData>
            </SkillGroup>

            <SkillGroup>
              <SkillData>
                <Check />
                <div>
                  <SkillName>MongoDB</SkillName>
                  <SkillLevel>Intermediate</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>AWS</SkillName>
                  <SkillLevel>Beginner</SkillLevel>
                </div>
              </SkillData>

              <SkillData>
                <Check />
                <div>
                  <SkillName>Docker</SkillName>
                  <SkillLevel>Beginner</SkillLevel>
                </div>
              </SkillData>
            </SkillGroup>
          </SkillBox>
        </SkillContent>
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
    margin: 1rem;
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;
