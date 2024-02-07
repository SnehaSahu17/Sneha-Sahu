import React from "react";
import { CircularText } from "./NavBar/Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed  bottom-4 flex items-center justify-center overflow-hidden right-16  sm:-top-20   sm:-right-4 sm:bottom-auto lg:top-[50%] top-[42%]">
      <div className="w-80 h-auto flex items-center justify-center relative md:w-52">
        <CircularText />
        <Link
          href="mailto:s.sneha1712@gmail.com"
          className="flex items-center justify-center absolute
          left-[62.5%] top-[61.5%] -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:text-dark dark:bg-light shadow-md border border-solid border-dark w-[4rem] h-[4rem] rounded-full text-sm md:w-12 md:h-12 md:text-[10px]
            "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
