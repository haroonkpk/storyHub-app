import StoryBox from "../components/StoryTypesBox";
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
            <h1 className="text-5xl font-bold ">
              Discover Stories That Inspire and Connect
            </h1>
            <p className="py-6 text-lg max-w-md">
              Dive into a world of captivating tales — from thrilling adventures
              to heartfelt journeys. Join our community and share your own
              story.
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
