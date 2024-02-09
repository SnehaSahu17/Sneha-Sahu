import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";
function Card({ src, title, key_techs, description, github, link }) {
  return (
    <>
      <div
        className={`p-4 flex flex-col w-[400px] h-[500px] rounded-lg border-2 border-solid border-dark dark:border-dark bg-gradient-to-b  from-[#000000] via-[#868B8C] to-[#EAF1F1] `}
      >
        <div
          className="absolute center top-36 -left-2 -z-10 w-[102%]
      h-[80%] rounded-[2rem] bg-dark  "
        />
        <Image
          src={src}
          alt="img"
          className="w-full h-[50%]  hover:scale-105 duration-300"
        />
        <h2 className="text-dark font-bold text-2xl mt-2 capitalize hover:underline cursor-pointer ">
          {title}
        </h2>

        <div className="my-2 flex flex-wrap gap-2 text-dark">
          {key_techs &&
            key_techs.map((tag) => (
              <button
                key={`${tag}`}
                className={`bg-[#00000033] p-1 rounded-md mr-2 hover:scale-110 hover:bg-[#f1dede15]`}
              >
                #{tag}
              </button>
            ))}
        </div>
        <p className="text-base mb-2 ">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg  p-2 px-6 text-lg font-semibold border-2 border-solid border-transparent bg-dark text-light hover:text-dark hover:border-dark hover:bg-light
              "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </>
  );
}
export default Card;
