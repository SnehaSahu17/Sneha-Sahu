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

const FrontEnd = () => {
  return (
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
  );
};

export default FrontEnd;
