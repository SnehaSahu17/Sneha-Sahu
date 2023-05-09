import React, { use, useRef } from 'react'
import { motion,useScroll } from "framer-motion"
import LiIcon from './LiIcon'
import AnimatedText from "@/components/AnimatedText";

const Details = ({position,company,time,address,work}) => {
    const ref = useRef(null);
       return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between md:w-full'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}} >
                <h3 className='capitalize text-2xl font-bold dark:text-light sm:text-lg'>{position}&nbsp;<a href="#" className='text-primary capitalize dark:text-primaryDark sm:text-xs'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-[90%] dark:text-light md:text-sm'>{work}</p>
            </motion.div>
        </li>
       )
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} =useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-32'>
         <AnimatedText text="Experience" className="mb-20 !md:ml-0 !text-8xl  lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
        <div ref={ref } className='w-[75%] md:ml-0
        mx-auto relative lg:w-[82%] '>
            <motion.div style={{scaleY:scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 md:ml-16  '>
                <Details position="Web Developer" company="Webwiz NITR" time="2022-Present" address="NIT Rourkela" work="Technical member of the official web development club of my institute.Contributed in the making of various offcial websites for the insitute and hackathons.Mentored juniors in paving their way into web development. "/>
                <Details position="Student Mentor" company="Institute Counselling Services(ICS)" time="2022-Present" address="NIT Rourkela" work="Helping juniors bridge the gap between academic and personal life.Conducted various interactive sessions on academic excellance and mental health."/>
                <Details position="Organiser" company="HackNITR Hackathon" time="May 2022-Jan 2023" address="NIT Rourkela" work="Worked on a sponsorship team of HackNITR, the largest student‐run Hackathon, where we interact and convince different companies to sponsor our event. "/>
                
            </ul>
        </div>
    </div>
  )
}

export default Experience