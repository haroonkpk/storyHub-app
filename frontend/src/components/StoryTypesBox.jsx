import StoryCard from "./storyCard.jsx";
import { useStoryStore } from "../stores/story.store.js";
import { useEffect } from "react";
import { ArrowBigLeft } from "lucide-react";

export default function StoryBox() {
  const {
    getStoryTypes,
    selectedTypes,
    setSlectedTypes,stories,
    storyTypes,
    getSelectedTypesStory,
  } = useStoryStore();

  useEffect(() => {
    getStoryTypes();
  }, []);

 function handleTypeClick (typeId){
  getSelectedTypesStory(typeId);
 }
 function handleSetSlectedTypes (){
  setSlectedTypes()
 }
  return (
    <div className="bg-base-300 rounded-box shadow-md w-full max-w-6xl p-6">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold ">Type of stories</h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <li className="col-span-full flex items-center gap-4 p-1 pb-2 text-xs opacity-60 tracking-wide">
          {selectedTypes&&(
            <button className="btn" onClick={handleSetSlectedTypes} >
            <ArrowBigLeft size={20} />{" "}
          </button>)}
          Most played songs this week
        </li>
        {!selectedTypes
          ? storyTypes.map((type, index) => (
              <div key={index} onClick={() => handleTypeClick(type._id)}>
                <StoryCard type={type} />
              </div>
            ))
          : stories.map((type, index) => (
              <div key={index} onClick={() => handleTypeClick(type._id)}>
                <StoryCard type={type} />
              </div>
            ))}
      </ul>
    </div>
  );
}
