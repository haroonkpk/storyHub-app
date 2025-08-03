import StoryBox from "../components/StoryTypesBox";
import { useRef } from "react";

export default function HomePage() {
  const storyRef = useRef(null);
  const scrollToStories = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sm:flex sm:flex-col justify-center items-center">

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl justify-center ">
            <img
              src="/bot.webp"
              draggable="false"
              className="lg:w-full sm:max-w-sm rounded-lg shadow-2xl select-none pointer-events-auto "
              alt="Bot"
            />
          <div className="flex flex-col space-y-4 items-center lg:block">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
              Discover Stories That Inspire and Connect
            </h1>
            <p className="py-6 text-lg max-w-md text-center lg:text-left">
              Dive into a world of captivating tales — from thrilling adventures
              to heartfelt journeys. Join our community and share your own
              story.
            </p>
            <button
              onClick={scrollToStories}
              className="hidden sm:block btn btn-primary "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* story box */}
      <div ref={storyRef}>
        <StoryBox />
      </div>
    </div>
  );
}
