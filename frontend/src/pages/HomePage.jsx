import React from "react";
import StoryBox from "../components/StoryTypesBox";
import SkillsSection from "../components/SkillsSection";
import HeroSection from "../components/SkillsSection";
import DevelopmentProcess from "../components/SkillsSection";
export default function HomePage() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse md:w-6xl ">
          <img
            src="/bot.webp"
            draggable="false"
            className="lg:w-full sm:max-w-sm rounded-lg shadow-2xl select-none pointer-events-auto "
            alt="Bot"
          />
          <div>
            <h1 className="text-5xl font-bold ">Welcome to Our StoryHub</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary ">Get Started</button>
          </div>
        </div>
      </div>
      {/* story box */}
      <StoryBox />
    </div>
  );
}
