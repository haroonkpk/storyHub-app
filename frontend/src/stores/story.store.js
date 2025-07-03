import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useStoryStore = create((set) => ({
  // ===========States===========
  storyTypes: [],
  selectedTypes: null,
  stories: [],
  episodes: [],
  episode: {},

  // ============funForStates=========
  getStoryTypes: async () => {
    try {
      const res = await axiosInstance.get("/story/getStoryTypes");
      set({ storyTypes: res.data.allStoryTypes });
    } catch (error) {
      console.log("error in get storytypes");
    }
  },

  getStoriesByTypeId: async (typeId) => {
    try {
      const res = await axiosInstance.get(`/story/stories/${typeId}`);
      set({ stories: res.data.stories });
    } catch (error) {
      console.log("error in get story", error);
    }
  },

  getEpisodesByStoryId: async (storyID) => {
    const res = await axiosInstance.get(`/story/episodes/${storyID}`);
    set({ episodes: res.data.episodes });
  },
  getEpisodeById: async (episodeId) => {
    const res = await axiosInstance.get(`/story/episode/${episodeId}`);
    set({ episode: res.data.episode });
  },

  // =============FunForCreation===========

  createCategory: async (formData) => {
    try {
      console.log(formData);
      
      const res = await axiosInstance.post("/story/storyTypes",  formData );
      console.log(res.data.message);
    } catch (error) {
      console.log(error.message);
    }
  },

}));
