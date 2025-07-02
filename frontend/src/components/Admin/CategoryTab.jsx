import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data (you'll replace this with real fetch or Zustand)
const dummyCategories = [
  { _id: "1", name: "Horror" },
  { _id: "2", name: "Adventure" },
];

export default function CategoryTab() {
  const [subTab, setSubTab] = useState("create");

  return (
    <div>
      {/* Sub-tabs for Create / Delete */}
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

      {/* Animated Switch */}
      <AnimatePresence mode="wait">
        {subTab === "create" ? (
          <motion.div
            key="create"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CreateCategoryForm />
          </motion.div>
        ) : (
          <motion.div
            key="delete"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DeleteCategoryList />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ========================== FORMS ===============================

function CreateCategoryForm() {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold">Add New Category</h2>
      <input
        type="text"
        placeholder="Category Name"
        className="input input-bordered w-full"
        required
      />
      <input
        type="file"
        accept="image/*"
        className="file-input file-input-bordered w-full"
        required
      />
      <button type="submit" className="btn btn-primary">
        Create Category
      </button>
    </form>
  );
}

function DeleteCategoryList() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Delete Categories</h2>
      <ul className="space-y-2">
        {dummyCategories.map((cat) => (
          <li
            key={cat._id}
            className="flex justify-between items-center p-2 border rounded-md"
          >
            <span>{cat.name}</span>
            <button className="btn btn-sm btn-error">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
