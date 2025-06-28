import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoryStore } from "../stores/story.store";

export default function EpisodePage() {
  const { id } = useParams();
  const { getEpisodes, episodes } = useStoryStore();

  useEffect(() => {
    getEpisodes(id);
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Episodes</h2>
      <ul className="space-y-4">
        {episodes.map((ep, index) => (
          <li key={index} className="bg-base-200 p-4 rounded-lg shadow">
            <h3 className="text-xl">{ep.title}</h3>
            <img
              src={ep.image}
              alt={ep.title}
              className="h-40 object-cover mt-2"
            />
            <p className="mt-2">{ep.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
