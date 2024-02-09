import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import styled from "styled-components";
import { GithubIcon } from "../components/Icons";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import {
  CommonSection,
  Grid,
} from "../common/GlobalStyles";
import { data } from "../utils/data";
import {
  ProjectContent,
  SkillContent,
  SkillTitle,
} from "../components/Skills/styles";

const ProjectCard = ({
  index,
  name,
  description,
  key_techs,
  image,
  source_code_link,
  deployed_url,
}) => {
  return (
    <ProjectContent>
      <div className="relative  w-full h-[230px] sm:mt-2">
        <img
          onClick={() => window.open(deployed_url, "_blank")}
          src={image}
          alt="project_image"
          className="w-full h-full object-fill rounded-2xl cursor-pointer"
        />

        <div className="absolute right-0 bottom-0 flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient bg-gradient-to-r from-gray-300 to-gray-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <GithubIcon />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <SkillTitle>{name}</SkillTitle>
        <p className="mt-2 text-secondary sm:text-[13px] text-[14px]">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {key_techs.map((tag) => (
          <p
            key={`${tag}`}
            className={` text-[14px] font-semibold`}
          >
            #{tag}
          </p>
        ))}
      </div>
    </ProjectContent>
  );
};

const projects = () => {
  const pro = [
    {
      img: "https://res.cloudinary.com/dkqxnquga/image/upload/v1706590763/Screenshot_2024-01-30_at_10.24.15_AM_kdihgx.png",
      name: "Multi-Ethnic Fest Website",
      github_link: "https://github.com/Cosmopolitan-2022/frontend",
      live_link: "https://www.multiethnicfest.com/",
    },
    {
      img: "https://res.cloudinary.com/dkqxnquga/image/upload/v1706590768/Screenshot_2024-01-30_at_10.20.48_AM_llg4lt.png",
      name: "SAC Official Website",
      github_link: "https://github.com/Webwiznitr/Project-Rose",
      live_link: "https://project-rose-two.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dkqxnquga/image/upload/v1706590759/Screenshot_2024-01-30_at_10.22.38_AM_hc8h4p.png",
      name: "Stree Vendors Website",
      github_link: "https://github.com/SnehaSahu17/StreeVendor",
      live_link: "https://stree-vendors.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dkqxnquga/image/upload/v1706590753/Screenshot_2024-01-30_at_10.28.05_AM_oraut7.png",
      name: "API Store",
      github_link: "https://github.com/SnehaSahu17/Api-Store",
      live_link: "https://jade-puppy-6f6906.netlify.app/",
    },
  ];
  return (
    <>
      <Head>
        <title>Sneha Sahu | Projects Page</title>
        <meta name="description" content="contains information about me"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center ">
        <Layout className="pt-28 sm:pt-32 lg:pt-32 dark:text-light ">
          <AnimatedText
            text="Projects"
            className="mb-10 !text-6xl sm:!text-6xl xs:!text-4xl "
          />
          <div className="flex max-w-6xl gap-6  mx-auto items-center relative md:mb-10">
            <div className="lg:w-full w-2/3  mx-auto">
              <Swiper
                slidesPerview={1.2}
                spaceBetween={20}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
              >
                {pro.map((project_info, i) => (
                  <SwiperSlide key={i}>
                    <div className="h-fit w-full p-4 bg-dark dark:bg-light rounded-xl">
                      <img
                        src={project_info.img}
                        alt="Project"
                        className="rounded-lg w-full h-56"
                      />
                      <h3 className="text-xl my-4 text-light dark:text-dark ">
                        {project_info.name}
                      </h3>
                      <div className="flex justify-between gap-3">
                        <a
                          href={project_info.github_link}
                          target="_blank"
                          className="w-10 text-light dark:text-dark"
                        >
                          <GithubIcon />
                        </a>

                        <a
                          href={project_info.live_link}
                          target="_blank"
                          className="ml-4 rounded-lg  p-2 px-6 text-lg font-semibold border-2 border-solid border-transparent bg-light text-dark hover:text-light hover:border-light hover:bg-dark
              dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark"
                        >
                          Visit Project
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* other projects */}
          <CommonSection >
            <AnimatedText
              text="My Technical Level"
              className="mb-10 !text-4xl sm:!text-2xl"
            />

            <SkillsContainer>
              {data.map((prop) => (
                <ProjectCard key={prop.index} {...prop} />
              ))}
            </SkillsContainer>
          </CommonSection>
        </Layout>
      </main>
    </>
  );
};

export default projects;

const SkillsContainer = styled(Grid)`
  grid-template-columns: repeat(3, 350px);
  column-gap: 3rem;
  justify-content: center;

  /* BREAKPOINTS */
  /* For large devices */
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 350px);
    column-gap: 3rem;
    justify-content: center;
  }

  /* For medium devices */
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
    justify-content: center;
  }

  /* For medium devices */
  @media screen and (max-width: 576px) {
    /* TODO: does not work */
    grid-template-columns: 350px;
  }

  /* For small devices */
  @media screen and (max-width: 350px) {
  }
`;
