import { useState } from "react";
import AddStoryType from "../components/AddStoryType.jsx";

export default function AdminDashboard() {
  const [activeTabe, setActiveTabe] = useState("createStoryType");
  const adminTabs = [
    {
      id: "createStoryType",
      label: "Create Story Type",
      icon: "FolderPlus",
    },
    {
      id: "createStory",
      label: "Create Story",
      icon: "BookPlus",
    },
    {
      id: "createEpisodes",
      label: "Create Episodes",
      icon: "FilePlus2",
    },
  ];
  
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <div>
        <div className="flex justify-center mb-8">
          {adminTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabe(tab.id)}
              className={`btn ${activeTabe=== tab.id ? "bg-amber-300":"bg-amber-900"}`}
            ></button>
          ))}
        </div>
        <div className=" max-w-4xl h-auto">
          <AddStoryType />
        </div>
      </div>
    </div>
  );
}
