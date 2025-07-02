// components/EpisodeCard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EpisodeCard({ episode, index }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="bg-base-200 rounded-2xl relative shadow-md p-4 max-w-md w-full"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src="/gar.jpg"
        alt={episode.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      {index >= 0 && (
        <div className="absolute top-2 left-2 bg-purple-600 text-white rounded-full px-2 py-1 text-xs font-semibold">
          Ep {index + 1}
        </div>
      )}
      <h2 className="text-xl font-bold mb-2">{episode.title}</h2>
      <p className="text-gray-600">{episode.description}</p>
    </motion.div>
  );
}
