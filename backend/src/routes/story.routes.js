import express from "express";
import {
  deleteStory,
  deleteStoryType,
  episodes,
  getAllStories,
  getEpisodeById,
  getEpisodes,
  getStories,
  getStoryTypes,
  story,
  storyTypes,
} from "../controllers/story.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

// get type, story and episode
router.get("/getStoryTypes", getStoryTypes);
router.get("/stories/:typeId", getStories);
router.get("/stories", getAllStories);
router.get("/episodes/:storyId", getEpisodes);
router.get("/episode/:episodeId", getEpisodeById);

// create type, story and
router.post("/storyTypes", protectedRoute, storyTypes);
router.post("/story/:typeId", protectedRoute, story);
router.post("/episodes/:storyId", protectedRoute, episodes);

//deleete routes
router.delete("/deleteStoryType/:id", protectedRoute, deleteStoryType);
router.delete("/deleteStory/:id", protectedRoute, deleteStory);
export default router;
