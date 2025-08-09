import StoryBox from "../components/StoryTypesBox";
import { useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function HomePage() {
  const storyRef = useRef(null);
  const scrollToStories = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center">
      {/* HERO SECTION */}
      <div className="relative min-h-screen w-full flex items-center justify-center bg-base-100 overflow-hidden px-4">
        {/* Background gradient + vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-base-100 to-base-200"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>

        {/* Floating book icon (subtle animation) */}
        <motion.div
          className="absolute top-10 text-primary/40"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <BookOpen size={60} strokeWidth={1.2} />
        </motion.div>

        {/* Glassmorphism content card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-md rounded-2xl bg-base-100/60 backdrop-blur-xl border border-base-300 p-6 shadow-xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-extrabold text-base-content leading-tight"
          >
            Step Into <span className="text-primary">A New Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-3 text-base text-base-content/70"
          >
            Discover adventures, mysteries, and heartfelt tales — all in one
            place, crafted to spark your imagination.
          </motion.p>

          <motion.button
            onClick={scrollToStories}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 w-full py-3 rounded-full bg-primary text-primary-content font-semibold shadow-lg hover:scale-[1.02] transition"
          >
            Start Reading
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 text-base-content/60 text-sm cursor-pointer flex flex-col items-center"
          onClick={scrollToStories}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓ Scroll
        </motion.div>
      </div>

      {/* STORY BOX SECTION */}
      <div ref={storyRef}>
        <StoryBox />
      </div>
    </div>
  );
}
