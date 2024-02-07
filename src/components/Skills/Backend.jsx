import React from "react";
import {
  SkillContent,
  SkillTitle,
  SkillBox,
  SkillGroup,
  SkillData,
  SkillName,
  SkillLevel,
} from "./styles";
 import { Check } from "../NavBar/Icons";

const BackEnd = () => {
  return (
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
  );
};

export default BackEnd;
