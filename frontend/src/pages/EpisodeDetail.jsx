import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoryStore } from "../stores/story.store";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import EpisodeDetailSkeleton from "../components/EpisodeDetailSkeleton";




export default function EpisodeDetail() {
  const { episodeId } = useParams();
  const { getEpisodeById, episode, loading } = useStoryStore();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  

  useEffect(() => {
    getEpisodeById(episodeId);
  }, [episodeId]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [episode]);

  if (loading || !episode.title) {
    return <EpisodeDetailSkeleton />;
  }

  return (
    <div  className="min-h-screen bg-base-300 px-4 md:px-10 py-8">
      {/* Back Button */}
      <button
        onClick={() => {
          if (window.history.length > 2) {
            navigate(-1);
          } else {
            navigate("/");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
      >
        <ArrowLeft className="w-5 h-5 font-bold" />
        BACK
      </button>

      {/* Episode Title */}
      <h1
        ref={contentRef}
        className="text-2xl md:text-4xl font-bold text-center text-primary mb-6"
      >
        {episode.title}
      </h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className=" flex bg-base-100 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-4 flex flex-col md:flex-row md:justify-between">

          {/* Image */}
            <img
              src={episode.img}
              alt={episode.title}
              className="float-left sm:mt-8 mb-3 sm:mb-0 w-100 h-fit inline object-cover rounded-xl"
            />

          {/* Description */}
          <p
            className="md:col-span-2 text-right p-4 md:p-6 text-lg md:text-xl tracking-wide leading-loose text-base-content whitespace-pre-line"
            style={{ fontFamily: `'Noto Nastaliq Urdu', serif` }}
          >
            {episode.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
