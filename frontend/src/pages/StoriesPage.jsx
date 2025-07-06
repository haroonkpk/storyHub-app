import { useStoryStore } from "../stores/story.store.js";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import SkeletonCard from "../components/SkeletonCard.jsx";
import Card from "../components/Card.jsx";

export default function StoryBox() {
  const { typeId } = useParams();
  const { getStoriesByTypeId, stories, loading, addToFavorites } =
    useStoryStore();
  const navigate = useNavigate();

  useEffect(() => {
    getStoriesByTypeId(typeId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [typeId]);

  return (
    <div className="w-full p-6 bg-base-300">
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
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          {stories.length} stories in {stories[0]?.type?.title} Type
        </li>

        <AnimatePresence>
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            stories.map((type, index) => (
              <motion.li
                key={type._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative">
                  <Link to={`/episodes/${type._id}`}>
                    <div className="flex flex-wrap justify-items-center">
                      <Card arr={type} />
                    </div>
                  </Link>

                  {/* favorite button */}
                  <motion.button
                    onClick={() => addToFavorites(type._id)}
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-3 right-3 text-red-500"
                  >
                    {false ? (
                      <Heart fill="red" className="text-red-500" />
                    ) : (
                      <Heart />
                    )}
                  </motion.button>
                </div>
              </motion.li>
            ))
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
}
