import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import card from "../../public/images/profile/profile.jpeg"
import Skills from "@/components/Skills";

const about = () => {
  return (
    <>
      <Head>
        <title>Sneha Sahu | About Page</title>
        <meta name="description" content="contains information about me"></meta>
      </Head>
      <main className="w-full flex flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose! " className="mb-10" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-5 flex flex-col items-start  justify-start -mt-5">
              <h2
                className="mb-4 text-2xl font-bold uppercase text-dark/75
            "
              >
                about me
              </h2>
              <p className="font-medium text-xl">
                Hi, I'm <b>CodeBucks</b>, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-5  text-xl" >
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.{" "}
              </p>
              <p className="font-medium  text-xl">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            
            <div className="col-span-3 relative rounded-2xl h-max border-2 border-solid border-dark bg-light p-8 -mt-24">
                <Image src={card} alt="sneha sahu" className="w-full h-auto rounded-2xl "/>
            </div>
          </div>
          <Skills/>
        </Layout>
      </main>
    </>
  );
};

export default about;
