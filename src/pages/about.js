import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import card from "../../public/images/profile/profile.jpeg"
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Sneha Sahu | About Page</title>
        <meta name="description" content="contains information about me"></meta>
      </Head>
      <TransitionEffect/>
      <main className="w-full flex flex-col items-center justify-center ">
        <Layout className="pt-16 dark:text-light ">
          <AnimatedText text="Passion Fuels Purpose! " className="mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-5 md:col-span-4 sm:col-span-8 flex flex-col items-start text-xl lg:text-lg sm:mt-5 md:text-justify justify-start -mt-5">
              <h2
                className="mb-4 text-2xl  font-bold uppercase text-dark/75 sm:mx-auto
            "
              >
                about me
              </h2>
              <p className="font-medium ">
                Hi, I'm <b>Sneha Sahu</b>, a web developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences.
              </p>
              <p className="font-medium my-5 " >
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.{" "}
              </p>
              <p className="font-medium">
              I am a keen learner with a knack for problem-solving as well as a team player.
               I am a web development enthusiast and I love exploring a variety of tech stacks. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            
            <div className="col-span-3 sm:col-span-8 md:col-span-4 relative rounded-2xl h-max border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8 sm:mt-0 md:mt-[50%] lg:mt-8 xl:mt-0 2xl:-mt-20">
                <Image src={card} alt="sneha sahu" className="w-full h-auto rounded-2xl " priority
                sizes="(max-width: 768px) 100vw
                        (max-width: 1200px) 50vw
                        33vw"/>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education/>
        </Layout >
      </main>
    </>
  );
};

export default about;
