import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";
import airbnb from "../../public/images/projects/airbnb.png";
import Carousel from "@/components/Carousel";
import { motion } from "framer-motion";

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
  return (
    <>
      <Head>
        <title>Sneha Sahu | Projects Page</title>
        <meta name="description" content="contains information about me"></meta>
      </Head>
      <main className="w-full flex flex-col items-center justify-center ">
        <Layout className="pt-16 ">
          <AnimatedText text="Projects" className="mb-10" />
          <div className="max-w-7xl mx-auto">
            <FeaturedProject
              type="Website Clone"
              title="AirBnb 2.0"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
              img={airbnb}
              link="https://airbnb-clone-wheat-three.vercel.app/"
              github="https://github.com/SnehaSahu17/Airbnb-Clone"
            />
          </div>
          <Carousel />
          <div className="max-w-7xl mx-auto mt-10">
            <FeaturedProject
              type="Website Clone"
              title="AirBnb 2.0"
              summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
              img={airbnb}
              link="https://airbnb-clone-wheat-three.vercel.app/"
              github="https://github.com/SnehaSahu17/Airbnb-Clone"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
