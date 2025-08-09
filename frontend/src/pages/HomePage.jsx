import StoryBox from "../components/StoryTypesBox";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";


export default function HomePage() {
  const storyRef = useRef(null);
  const scrollToStories = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-base-200">
        {/* Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-base-300 opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-base-100 via-transparent to-base-300 opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-20 flex flex-col items-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 p-4 bg-base-100 rounded-full shadow-lg"
          >
            <BookOpen className="w-10 h-10 text-primary" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-base-content"
          >
            Welcome to <span className="text-primary">TellingStory Hub</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-2xl text-lg text-base-content/70"
          >
            Dive into a world of captivating tales, where imagination meets
            reality. Discover stories that inspire, entertain, and connect
            hearts.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 btn btn-primary gap-2"
          >
            Start Reading
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* STORY BOX SECTION */}
      <div ref={storyRef}>
        <StoryBox />
      </div>
    </div>
  );
}
