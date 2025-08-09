import StoryBox from "../components/StoryTypesBox";
import { useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, Feather } from "lucide-react"; // Lucide icons

export default function HomePage() {
  const storyRef = useRef(null);
  const scrollToStories = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sm:flex sm:flex-col justify-center items-center">
      {/* HERO SECTION */}
      <div className="relative min-h-screen w-full flex items-center justify-center bg-base-100 overflow-hidden">
        {/* Floating Elements (SVG Icons instead of images) */}
        <motion.div
          className="absolute top-20 left-10 text-base-300"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <BookOpen size={80} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 text-base-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Feather size={70} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
          {/* Right Image */}
          <motion.img
            src="/img.jpg"
            draggable="false"
            className="lg:w-[450px] rounded-2xl shadow-2xl select-none"
            alt="Bot"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Left Text */}
          <motion.div
            className="flex flex-col space-y-6 text-base-content items-center lg:items-start mt-8 lg:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold text-center lg:text-left leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Discover Stories That{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Inspire and Connect
              </span>
            </motion.h1>

            <p className="text-lg max-w-md text-center lg:text-left text-base-content/80">
              Dive into thrilling adventures, heartfelt journeys, and tales that
              will stay with you forever. Be part of our growing community and
              share your own story with the world.
            </p>

            <motion.button
              onClick={scrollToStories}
              className="px-6 py-3 rounded-full bg-primary text-primary-content font-semibold shadow-lg hover:scale-105 transition"
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 text-base-content text-sm cursor-pointer flex flex-col items-center"
          onClick={scrollToStories}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓ Scroll to Explore
        </motion.div>
      </div>

      {/* STORY BOX SECTION */}
      <div ref={storyRef}>
        <StoryBox />
      </div>
    </div>
  );
}
