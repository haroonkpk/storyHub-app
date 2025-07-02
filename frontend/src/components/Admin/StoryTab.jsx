import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dummyStories = [
  { _id: "1", title: "Ghost in the Wall" },
  { _id: "2", title: "Mountain Curse" },
];

export default function StoryTab() {
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
              <h2 className="text-xl font-semibold">Add New Story</h2>
              <input
                type="text"
                placeholder="Story Title"
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Short Description"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
              <select className="select select-bordered w-full" required>
                <option disabled selected>
                  Choose Category
                </option>
                <option>Horror</option>
                <option>Drama</option>
              </select>
              <button type="submit" className="btn btn-primary">
                Create Story
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
            <h2 className="text-xl font-semibold mb-4">Delete Stories</h2>
            <ul className="space-y-2">
              {dummyStories.map((story) => (
                <li
                  key={story._id}
                  className="flex justify-between items-center p-2 border rounded-md"
                >
                  <span>{story.title}</span>
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
