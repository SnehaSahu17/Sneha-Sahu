import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  CommonSection,
  CommonTitle,
  CommonSubTitle,
  H3Title,
} from "../../common/GlobalStyles";
import AnimatedText from "../AnimatedText";
import { Bag, Calendar, Cap, Score } from "../Icons";

const Qualification = () => {
  const [isactive, setisactive] = useState("true");

  const handleSetActiveExp = () => {
    setisactive("true");
  };

  const handleSetActiveEdu = () => {
    setisactive("false");
  };

  return (
    <CommonSection>
      <AnimatedText
        text="Qualification"
        className=" !text-6xl sm:!text-6xl xs:!text-4xl sm:mb-2 sm:mt-10"
      />
      <AnimatedText
        text="My personel journey"
        className="mb-10 sm:mb-10 !text-2xl sm:!text-xl "
      />

      <QualificationContainer>
        <QualificationTab>
          <ButtonLink isactive={isactive} onClick={handleSetActiveExp}>
            <Bag></Bag>
            Experience
          </ButtonLink>
          <ButtonLink isactive={!isactive} onClick={handleSetActiveEdu}>
            <Cap></Cap>
            Education
          </ButtonLink>
        </QualificationTab>

        <QualificationSections>
          {isactive ? (
            <QualificationContentExp isactive={isactive}>
              <QualificationData>
                <div>
                  <H3Title>Full-stack Developer</H3Title>
                  <QualificationSubTitle>Webwiz NITR</QualificationSubTitle>
                  <QualificationCalendar>
                    <Calendar></Calendar> 2022-Present
                  </QualificationCalendar>
                </div>

                <div>
                  <QualificationRounder></QualificationRounder>
                  <QualificationLine></QualificationLine>
                </div>
              </QualificationData>

              <QualificationData>
                <div></div>

                <div>
                  <QualificationRounder></QualificationRounder>
                  <QualificationLine></QualificationLine>
                </div>

                <div>
                  <H3Title>Student Mentor</H3Title>
                  <QualificationSubTitle>
                    Institute Counselling Services(ICS)
                  </QualificationSubTitle>
                  <QualificationCalendar>
                    <Calendar></Calendar> Dec 2022 - present
                  </QualificationCalendar>
                </div>
              </QualificationData>

              <QualificationData>
                <div>
                  <H3Title>Organiser</H3Title>
                  <QualificationSubTitle>
                    HackNITR Hackathon
                  </QualificationSubTitle>
                  <QualificationCalendar>
                    <Calendar></Calendar>May 2022-Jan 2023
                  </QualificationCalendar>
                </div>

                <div>
                  <QualificationRounder></QualificationRounder>
                  <QualificationLine></QualificationLine>
                </div>
              </QualificationData>
            </QualificationContentExp>
          ) : (
            <QualificationContentEdu isactive={!isactive}>
              <QualificationData>
                <div>
                  <H3Title>Civil Engineering</H3Title>
                  <QualificationSubTitle>
                    2021-2025 | National Institute Of Technology, Rourkela
                  </QualificationSubTitle>
                  <QualificationCalendar>
                    <Score></Score>
                    CGPA: 7.85/10
                  </QualificationCalendar>
                </div>

                <div>
                  <QualificationRounder></QualificationRounder>
                  <QualificationLine></QualificationLine>
                </div>
              </QualificationData>

              <QualificationData>
                <div></div>

                <div>
                  <QualificationRounder></QualificationRounder>
                  <QualificationLine></QualificationLine>
                </div>

                <div>
                  <H3Title>Intermediate</H3Title>
                  <QualificationSubTitle>
                    2018-2020 | D.A.V. Public School,Berhampur
                  </QualificationSubTitle>
                  <QualificationCalendar>
                    <Score></Score>
                    Percentage: 93.4%
                  </QualificationCalendar>
                </div>
              </QualificationData>

              <QualificationData>
                <div>
                  <H3Title>Matriculation</H3Title>
                  <QualificationSubTitle>
                    2008-2018 | De Paul School,Berhampur
                  </QualificationSubTitle>
                  <QualificationCalendar>
                    <Score></Score>
                    Percentage: 94%
                  </QualificationCalendar>
                </div>

                <div>
                  <QualificationRounder></QualificationRounder>
                  <QualificationLine></QualificationLine>
                </div>
              </QualificationData>
            </QualificationContentEdu>
          )}
        </QualificationSections>
      </QualificationContainer>
    </CommonSection>
  );
};

export default Qualification;

const QualificationContainer = styled(Container)`
  max-width: 768px;
`;

const QualificationTab = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ButtonLink = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem;
  border-bottom: ${({ isactive }) => (isactive ? "2px solid #bababa" : "none")};
  cursor: pointer;
  @media screen and (max-width: 576px) {
    margin: 0 0.75rem;
  }
`;

const QualificationSections = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const QualificationContentEdu = styled.div`
  animation: ${({ isactive }) => (isactive ? "fadein 2s ease-in-out" : "none")};
  display: ${({ isactive }) => (isactive ? "block" : "none")};
`;

const QualificationContentExp = styled.div`
  animation: ${({ isactive }) =>
    !isactive ? "fadein 2s ease-in-out" : "none"};
  @keyframes fadein {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: block;
      opacity: 0;
    }

    30% {
      display: block;
      opacity: 1;
    }
  }
  display: "block";

  transition: all 0.2s ease-in-out;
`;

const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 3.5rem;

  @media screen and (max-width: 443px) {
    column-gap: 2rem;
  }

  @media screen and (max-width: 396px) {
    column-gap: 0.5rem;
  }
`;

const QualificationSubTitle = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
`;

const QualificationCalendar = styled.div`
  font-size: 0.875rem;
  display: flex;
  gap: 0.5rem;
`;

const QualificationRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #757575;
  border-radius: 50%;
`;

const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: #757575;
  transform: translate(6px, -7px);
`;
