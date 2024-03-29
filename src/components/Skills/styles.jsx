import styled from "styled-components";

export const SkillContent = styled.div`
  padding: 2rem 4rem;
  border: 2px solid #BABABA;
  border-radius: 1.5rem;
  /* For medium devices */
  @media screen and (max-width: 576px) {
    padding: 1rem;
  }

  @media screen and (max-width: 350px) {
    padding: 1.5rem;
  }
`;
export const ProjectContent = styled.div`
  padding: 1rem;
  height: 27rem;
  border: 2px solid #bababa;
  border-radius: 1.5rem;
  /* For medium devices */
  @media screen and (max-width: 576px) {
    padding: 1rem;
  }

  @media screen and (max-width: 350px) {
    padding: 0.5rem;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SkillBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;

  @media screen and (max-width: 350px) {
    column-gap: 1.5rem;
  }
`;

export const SkillGroup = styled.div`
  display: grid;
  align-items: flex-start;
  row-gap: 1rem;
`;

export const SkillData = styled.div`
  display: flex;
  column-gap: 0.5rem;

  .bx {
    font-size: 1.5rem;
    color: #333333;
  }
`;

export const SkillName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  @media screen and (max-width: 350px) {
    font-size: 0.875rem;
  }
`;

export const SkillLevel = styled.span`
  font-size: 0.625rem;
`;

