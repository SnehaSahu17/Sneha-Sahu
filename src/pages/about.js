import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import card from "../../public/images/profile/profile.jpeg"
import Skills from "../components/Skills/Skills";
import TransitionEffect from "../components/TransitionEffect";
import Qualification from "../components/Qualifications/Qualifications";


const about = () => {
  return (
    <>
      <Head>
        <title>Sneha Sahu | About Page</title>
        <meta name="description" content="contains information about me"></meta>
      </Head>

      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center ">
        <Layout className="pt-28 sm:pt-32 lg:pt-32  dark:text-light ">
          <AnimatedText
            text="About Me"
            className="mb-10 !text-6xl sm:!text-6xl xs:!text-4xl sm:mb-2"
          />
          <div className="xl:w-full max-w-7xl flex sm:flex-col ">
            <div className=" xl:w-[90%] w-[50%] mx-auto flex flex-col items-start sm:text-sm lg:text-sm text-xl sm:mt-5 xl:text-justify justify-start lg:mt-20 xl:mt-5 mt-20">
              <p className="font-medium">
                Hi, I'm <b>Sneha Sahu</b>, a web developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences.
              </p>
              <p className="font-medium lg:my-2 my-5 ">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.{" "}
              </p>
              <p className="font-medium ">
                I am a keen learner with a knack for problem-solving as well as
                a team player. I am a web development enthusiast and I love
                exploring a variety of tech stacks. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div className=" w-1/3 h-1/3 relative rounded-2xl xl:h-max border-2 border-solid xl:w-full border-dark bg-light dark:border-light dark:bg-dark p-8 xl:p-4 sm:mt-10  sm:ml-0 xl:ml-10">
              <Image
                src={card}
                alt="sneha sahu"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width: 768px) 100vw
                        (max-width: 1200px) 50vw
                        33vw"
              />
            </div>
          </div>
          <Skills />
          <Qualification/>
        </Layout>
      </main>
    </>
  );
};

export default about;
