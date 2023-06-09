import React, { use, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "@/components/AnimatedText";

const Details = ({ degree, time, address, work ,marks}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }} 
        className="w-[90%]"
      >
        <h3 className="capitalize text-2xl font-bold dark:text-light">{degree}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-semibold w-full dark:text-light">{marks}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <AnimatedText text="Education" className="mb-20 !text-8xl !md:ml-0 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
      <div ref={ref} className="w-[75%] mx-auto md:ml-0 relative ">
      <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top"
        />
       <ul className="w-full flex flex-col justify-between items-center ml-4 ">
          <Details
            degree="B.Tech in Civil Engineering"
            time="2021-2025"
            address="National Institute of Technology,Rourkela"
            
            marks="CGPA:8.34/10."
                
          />
          <Details
            degree="Intermediate"
            time="2018-2020"
            address="D.A.V. Public School,Berhampur"
            
            marks="Percentage:93.4%"
                
          />
          <Details
            degree="Matriculation"
            time="2008-2018"
            address="De Paul School,Berhampur"
            
            marks="Percentage:94%"
                
          />
        
        </ul>
      </div>
    </div>
  );
};

export default Education;
