import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import maze from "../../public/images/projects/maze.png"
import AnimatedText from "@/components/AnimatedText";

function Carousel() {

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
}
 

  return (
    <div className="relative">
      <AnimatedText text=" Other Projects" className="my-10 !text-6xl" />
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="carousel p-2  space-x-10 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
        <div>
          <Card src={maze} title="maze runner" key_techs={["HTML","CSS","Javascript"]} color1={"from-[#EB5E6E]"} color2={"via-[#F49671]"} color3={"to-[#FAC172]"}/>
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"}/>
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"} />
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"} />
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"}/>
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"} />
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"}/>
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"} />
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"}/>
        </div>
        <div>
          <Card src={maze} title="maze runner" key_techs={["html","css","javascript"]} color1={"from-[#CE1D61]"} color2={"via-[#E07BA4]"} color3={"to-[#F4E5F0]"} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;