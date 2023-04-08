import Image from "next/image";
import maze from "../../public/images/projects/maze.png"
import { GithubIcon } from "@/components/Icons";
import Link from "next/link";
function Card({src,title,key_techs,description,link,github,color1,color2,color3}) {
    return (
      <>
       <div className={`p-4 flex flex-col w-[400px] h-[500px] rounded-lg border-2 border-solid border-light bg-gradient-to-b  ${color1} ${color2} ${color3} `}>
       <div className="absolute center top-36 -left-2 -z-10 w-[102%]
      h-[80%] rounded-[2rem] bg-dark "/>
            <Image src={src} alt="img" className="w-full h-[50%] "/>
            <h2 className="text-dark font-bold text-2xl mt-2 capitalize hover:underline cursor-pointer ">{title}</h2>
            
            <div className='my-2 flex flex-wrap gap-2 text-dark'>
                    {key_techs && key_techs.map((tag) => (
                        <button
                            key={`${tag}`}
                            className={`bg-[#00000033] p-1 rounded-md mr-2 hover:scale-110 hover:bg-[#f1dede4f]`}
                        >
                            #{tag}
                        </button>
                    ))}
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