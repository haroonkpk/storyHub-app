import React, { useEffect } from "react";
import { useStoryStore } from "../stores/story.store";
import { useParams } from "react-router-dom";

export default function EpisodePage() {
  const { storyId } = useParams();
  const { getEpisodesByStoryId, episodes } = useStoryStore();

  useEffect(() => {
    getEpisodesByStoryId(storyId);
  }, [storyId]);
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-4">
      {episodes.length === 0 ? (
        <>
          <div className="flex flex-col justify-center items-center text-center py-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076504.png"
              alt="No episodes"
              className="w-28 h-28 opacity-70 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-semibold text-base-content/70 animate-bounce">
              No Episodes Found
            </h2>
            <p className="text-sm text-base-content/50 mt-2 max-w-xs">
              It looks like there are no episodes for this story yet. Please
              check back later!
            </p>
          </div>
        </>
      ) : (
        episodes?.map((ep, idx) => (
          <div
            key={ep._id}
            className="w-60 h-fit relative bg-base-300 rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={ep.img}
              alt={`Episode ${idx + 1}`}
              className="w-60 h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-purple-600 text-white rounded-full px-2 py-1 text-xs font-semibold">
              Ep {idx + 1}
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold truncate">{ep.title}</h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
