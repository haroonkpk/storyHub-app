import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dummyEpisodes = [
  { _id: "1", title: "Episode 1: Shadow" },
  { _id: "2", title: "Episode 2: Whisper" },
];

const dummyStories = [
  { _id: "1", title: "Haunted House" },
  { _id: "2", title: "Old Village" },
];

export default function EpisodeTab() {
  const [subTab, setSubTab] = useState("create");

  return (
    <div>
      <div className="tabs mb-4">
        <a
          className={`tab tab-bordered ${
            subTab === "create" ? "tab-active" : ""
          }`}
          onClick={() => setSubTab("create")}
        >
          ➕ Create
        </a>
        <a
          className={`tab tab-bordered ${
            subTab === "delete" ? "tab-active" : ""
          }`}
          onClick={() => setSubTab("delete")}
        >
          ❌ Delete
        </a>
      </div>

      <AnimatePresence mode="wait">
        {subTab === "create" ? (
          <motion.div
            key="create"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form className="space-y-4">
              <h2 className="text-xl font-semibold">Add New Episode</h2>
              <select className="select select-bordered w-full" required>
                <option disabled selected>
                  Choose Story
                </option>
                {dummyStories.map((story) => (
                  <option key={story._id} value={story._id}>
                    {story.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Episode Title"
                className="input input-bordered w-full"
                required
              />
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-bordered w-full"
                required
              />
              <textarea
                placeholder="Episode Description"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Create Episode
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="delete"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Delete Episodes</h2>
            <ul className="space-y-2">
              {dummyEpisodes.map((ep) => (
                <li
                  key={ep._id}
                  className="flex justify-between items-center p-2 border rounded-md"
                >
                  <span>{ep.title}</span>
                  <button className="btn btn-sm btn-error">Delete</button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
