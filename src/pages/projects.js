import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { GithubIcon } from "../components/NavBar/Icons";
import Link from "next/link";
import airbnb from "../../public/images/projects/airbnb.png";
import api from "../../public/images/projects/api-store.png";
import Carousel from "@/components/Carousel";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../public/images/projects/airbnb.png";
import project2 from "../../public/images/projects/airbnb.png";
import project3 from "../../public/images/projects/airbnb.png";
import project4 from "../../public/images/projects/airbnb.png";
import project5 from "../../public/images/projects/airbnb.png";
import project_person from "../../public/images/projects/airbnb.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative ">
      <div
        className="absolute top-0 -right-3 -z-10 w-[102%]
      h-[103%] rounded-[2rem] bg-dark dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority 
          sizes="(max-width: 768px) 100vw
                        (max-width: 1200px) 50vw
                        50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 text-dark dark:text-light">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium ">{summary}</p>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg  p-2 px-6 text-lg font-semibold border-2 border-solid border-transparent bg-dark text-light hover:text-dark hover:border-dark hover:bg-light
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  const pro = [
    {
      img: project1,
      name: "Movie App",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://myreactflix.netlify.app",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: project4,
      name: "React Nav",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://reacttailwindnavbar.netlify.app",
    },
    {
      img: project5,
      name: "Vue Country",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://vuecountry05.netlify.app",
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
        <Layout className="pt-28 sm:pt-32 lg:pt-32  dark:text-light ">
          <AnimatedText
            text="Projects"
            className="mb-10 !text-6xl sm:!text-6xl xs:!text-4xl sm:mb-2"
          />
          <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
            <div className="lg:w-2/3 w-full">
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
                        alt=""
                        className="rounded-lg w-88 h-88"
                      />
                      <h3 className="text-xl my-4">{project_info.name}</h3>
                      <div className="flex gap-3">
                        <a
                          href={project_info.github_link}
                          target="_blank"
                          className="text-dark bg-light px-2 py-1 inline-block"
                        >
                          Github
                        </a>
                        <a
                          href={project_info.live_link}
                          target="_blank"
                          className="text-dark bg-light px-2 py-1 inline-block"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="lg:block hidden">
              <img src={project_person} alt="" />
            </div>
          </div>

          <Carousel />

          <div className="max-w-7xl mx-auto mt-10">
            <FeaturedProject
              type="Website Clone"
              title="AirBnb 2.0"
              summary="A cloned website of AirBnb using Next JS and Tailwind CSS. It has smooth page transitions,it is mobile responsive."
              img={airbnb}
              link="https://airbnb-clone-nzej.vercel.app/"
              github="https://github.com/SnehaSahu17/Airbnb-Clone"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
