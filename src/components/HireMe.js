import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import Tag from "../../public/images/svgs/tag.png"
import Image from 'next/image'



const HireMe = () => {
  return (
    <div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hidden '>
        <div className='w-80 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark dark:fill-light animate-pulse "}/>
            <Link href="mailto:s.sneha1712@gmail.com" className='flex items-center justify-center absolute
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark -mt-[20px] -ml-[0.35rem] text-light dark:text-dark dark:bg-light shadow-md border border-solid border-dark w-[4rem] h-[4rem] rounded-full text-sm
            '>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe