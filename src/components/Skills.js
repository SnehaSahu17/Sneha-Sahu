import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute  dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5}}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
     <AnimatedText text="Skills " className="mb-10 !text-8xl !mt-20 md:!text-6xl md:!mt-24" />
      
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light  p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 sm:p-2 xs:text-xs "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="25vw" y="1vw" />
        <Skill name="Tailwind CSS" x="0vw" y="12vw" />
        <Skill name="Bootstrap5" x="-20vw" y="-15vw" />
        <Skill name="React JS" x="15vw" y="-12vw" />
        <Skill name="Next JS" x="0vw" y="-22vw" />
        <Skill name="Github" x="-32vw" y="-5vw" />
      </div>
    </>
  )
};

export default Skills;
