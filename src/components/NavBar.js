import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon } from "./Icons";
import HireMe from "./HireMe";

//Desktop view
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute h-[1px] bg-dark dark:bg-light inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

//Mobile View
const CustomMobileLink = ({ href, title, className = "" ,toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`absolute h-[1px] bg-light dark:bg-dark inline-block left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {

  const [mode,setmode] = useThemeSwitcher();
  const [isOpen,setIsOpen]=useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-light dark:bg-dark w-full px-32 py-8 font-medium flex items-start justify-between dark:text-light fixed z-10 lg:px-16 md:px-12 sm:px-8 ">
      {/* hambuger menu */}
      <button
        className="flex-col justify-center items-center hidden md:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-1 w-8 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-3.5" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-1 w-8 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-1 w-8 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-1 w-8 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center md:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://github.com/SnehaSahu17"
            target="_blank"
            className="w-6 mr-3 dark:text-light"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sneha-sahu-7117691b7/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/SSneha1712"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={"/"}
            target="_blank"
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => {
              setmode(mode === "light" ? "dark" : "light");
            }}
            className="ml-4 flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark"
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile View Navbar Content */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <nav className="flex flex-col justify-center items-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap ">
            <motion.a
              href="https://github.com/SnehaSahu17"
              target="_blank"
              className="w-6 mr-3 dark:text-light sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sneha-sahu-7117691b7/"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/SSneha1712"
              target="_blank"
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href={"/"}
              target="_blank"
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => {
                setmode(mode === "light" ? "dark" : "light");
              }}
              className="ml-4 sm:mx-1 flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark"
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* Logo */}
      <div className="absolute  left-[50%]  top-2 translate-x-[-50%]">
        <Logo />
      </div>
      {/* hire me button */}<div className="sm:flex hidden"><HireMe /></div>
      
    </header>
  );
};

export default NavBar;
