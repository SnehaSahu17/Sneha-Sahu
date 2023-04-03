import Image from "next/image";
import maze from "../../public/images/projects/maze.png"
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";
function Card({src,title}) {
    return (
      <>
       <div className=" ml-12 p-4 flex flex-col w-[400px] h-[500px] rounded-lg border-2 border-solid border-gray-300 bg-gradient-to-b from-white via-pink-200 to-pink-700">
            <Image src={src} alt="img" className="w-full h-[50%]"/>
            <h2 className="text-dark font-bold text-2xl mt-2 capitalize">{title}</h2>
            <div className="flex items-center justify-start my-2 text-dark ">
            <span  className="bg-[#00000033] p-1 rounded-md mr-2">#html</span>
            <span  className="bg-[#00000033] p-1 rounded-md mr-2">#html</span>
            <span  className="bg-[#00000033] p-1 rounded-md mr-2">#html</span>
            </div>
            <p className="text-base mb-2">
            Large scale Ecommerce website for a South African based client with 3 brick & mortar locations and over 3000 products.
            </p>
            <div className="flex items-center justify-between mt-2">
          <Link href="/" target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href="/" target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
       </div>
      </>
    );
  }
  export default Card;