import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="capitalize text-center text-8xl font-bold mt-64 w-full">
        skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer "
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
