import React, { useEffect } from "react";
import { useStoryStore } from "../stores/story.store";
import { Link, useNavigate, useParams } from "react-router-dom";
import EpisodeCard from "../components/EpisodeCard";

export default function EpisodePage() {
  const { storyId } = useParams();
  const { getEpisodesByStoryId, episodes } = useStoryStore();

  useEffect(() => {
    getEpisodesByStoryId(storyId);
  }, [storyId]);

  const navigate = useNavigate();
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
          <div className="min-h-screen  py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Episodes</h1>
            <div className="flex items-center gap-4 p-1 pb-2 text-xs opacity-60 tracking-wide">
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
              {episodes.length} episodes
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {episodes.map((episode, index) => (
                <Link to={`/episode/${episode._id}`}>
                  <EpisodeCard
                    key={episode._id}
                    index={index}
                    episode={episode}
                  />
                </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

{
  /* <div className="absolute top-2 left-2 bg-purple-600 text-white rounded-full px-2 py-1 text-xs font-semibold">
  Ep {idx + 1}
</div>; */
}

{
  /* <div className="min-h-screen  py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Episodes</h1>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {episodes.map((episode) => (
                <EpisodeCard key={episode._id} episode={episode} />
              ))}
            </div>
          </div> */
}
