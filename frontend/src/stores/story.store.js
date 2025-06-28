import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useStoryStore = create((set) => ({
  storyTypes: [],
  selectedTypes: null,
  stories: [],
  episodes: [],

  getStoryTypes: async () => {
    try {
      const res = await axiosInstance.get("/story/getStoryTypes");
      console.log(res.data.allStoryTypes);
      set({ storyTypes: res.data.allStoryTypes });
    } catch (error) {
      console.log("error in get storytypes");
    }
  },

  getSelectedTypesStory: async (typeId) => {
    try {
      const res = await axiosInstance.get(`/story/stories/${typeId}`);
      set({selectedTypes:typeId ,stories: res.data.selectedTypeStory });
    } catch (error) {
      console.log("error in get story", error);
    }
  },

  setSlectedTypes:()=>{
    set({selectedTypes:null})
  }
}));
