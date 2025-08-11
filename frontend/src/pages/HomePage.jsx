import StoryBox from "../components/StoryTypesBox";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Feather, Quote } from "lucide-react";

export default function HomePage() {
  const storyRef = useRef(null);
  const scrollToStories = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* HERO SECTION */}
      <section className="w-full max-w-6xl relative overflow-hidden py-20 px-4 flex flex-col md:flex-row justify-between ">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 bg-base-300 rounded-full shadow-sm">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium tracking-wide">
              Your Story Starts Here
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-base-content">
            Discover <span className="text-primary">TellingStory Hub</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-lg text-base-content/70 max-w-lg">
            A place where imagination flows freely. Share your tales, read
            others’ journeys, and explore endless narratives that inspire and
            connect.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-primary gap-2"
            >
              Start Reading <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-outline"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="absolute -z-10 w-full h-full bg-primary/20 rounded-full blur-3xl"></div>
          <img
            src="/books.webp"
            alt="Story illustration"
            className="md:max-w-sm rounded-2xl object-cover shadow-xl border-4 border-base-100"
          />
        </motion.div>
      </section>

      {/* STORY BOX SECTION */}
      <div ref={storyRef} className="w-full">
        <StoryBox />
      </div>
    </div>
  );
}
