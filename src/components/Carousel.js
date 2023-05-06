import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import maze from "../../public/images/projects/maze.png";
import typing from "../../public/images/projects/typing-test.png";
import dict from "../../public/images/projects/dictionary.png";
import dummy from "../../public/images/projects/dummy-portfolio.png";
import medi from "../../public/images/projects/medicamp.png";
import todo from "../../public/images/projects/to-do.png";
import weather from "../../public/images/projects/weather.png";
import AnimatedText from "@/components/AnimatedText";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

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
      <div
        id="content"
        className="carousel p-2  space-x-10 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        <div>
          <Card
            src={weather}
            title="Weather App"
            key_techs={["react js", "tailwind css"]}
            description={
              "Built a weather app with React JS and Tailwind CSS using OpenWeatherMap API."
            }
            github="https://github.com/SnehaSahu17/Weather-app"
            link="https://weather-app-nu-ashy.vercel.app/"
            
          />
        </div>
        <div>
          <Card
            src={dummy}
            title="Dummy Portfolio"
            key_techs={["react js", "tailwind css"]}
            description={
              "Built a portfolio app with React JS and Tailwind CSS."
            }
            github="https://github.com/SnehaSahu17/Portfolio-Page"
            link="https://thriving-sorbet-c8191b.netlify.app/"
            
          />
        </div>
        <div>
          <Card
            src={medi}
            title="Project Medicamp"
            key_techs={["react js", "tailwind css"]}
            description={
              "A website designed to book doctor appointments according to symptoms."
            }
            github="https://github.com/SnehaSahu17/project-medicamp"
            link="https://main--soft-cendol-bd755c.netlify.app/"
            
          />
        </div>
        <div>
          <Card
            src={typing}
            title="Typing Test"
            key_techs={["html", "css", "javascript"]}
            description={
              "Built a Typing Test app that checks the typing speed and accuracy."
            }
            github="https://github.com/SnehaSahu17/Typing-Test"
            link="https://snehasahu17.github.io/Typing-Test/"
            
          />
        </div>
        <div>
          <Card
            src={todo}
            title="To-Do App"
            key_techs={["html", "css", "javascript"]}
            description={
              "Built a Task scheduler app where One can create task , edit and delete"
            }
            github="https://github.com/SnehaSahu17/Todo-App"
            link="https://snehasahu17.github.io/Todo-App/"
            
          />
        </div>
        <div>
          <Card
            src={maze}
            title="Maze Runner"
            key_techs={["html", "css", "javascript"]}
            description={
              "Built a mini‐puzzle game built using the basics of HTML, CSS and JavaScript."
            }
            github="https://github.com/SnehaSahu17/Maze-Runner"
            link="https://snehasahu17.github.io/Maze-Runner/"
            
          />
        </div>
        <div>
          <Card
            src={dict}
            title="Dictionary APP"
            key_techs={["html", "css", "javascript"]}
            description={
              "Built a dictionary app which includes API integration."
            }
            github="https://github.com/SnehaSahu17/dictionary"
            link="https://snehasahu17.github.io/dictionary/"
            
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
