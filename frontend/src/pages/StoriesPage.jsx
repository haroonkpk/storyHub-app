import StoryCard from "../components/storyCard.jsx";
import { useStoryStore } from "../stores/story.store.js";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import EpisodeCard from "../components/EpisodeCard.jsx";

export default function StoryBox() {
  const { typeId } = useParams();
  const { getStoriesByTypeId, stories } = useStoryStore();

  useEffect(() => {
    getStoriesByTypeId(typeId);
  }, [typeId]);

  const navigate = useNavigate();
  return (
    <div className="bg-base-300 rounded-box shadow-md w-full max-w-6xl p-6">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold ">
          {stories[0]?.type?.title} stories
        </h1>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        <li className="col-span-full flex items-center gap-4 p-1 pb-2 text-xs opacity-60 tracking-wide">
          <button
            onClick={() => {
              if (window.history.length > 2) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            ← Go Back
          </button>
          {stories.length} stories in {stories[0]?.type?.title} Type
        </li>

        <AnimatePresence>
          {stories.map((type, index) => (
            <motion.li
              key={type._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/episodes/${type._id}`}>
                <div className="flex flex-wrap justify-items-center">
                  <EpisodeCard episode={type} />
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
