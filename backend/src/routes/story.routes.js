import express from "express";
import {
  episodes,
  getEpisodes,
  getStories,
  getStoryTypes,
  story,
  storyTypes,
} from "../controllers/story.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

// get type, story and episode
router.get("/getStoryTypes", protectedRoute, getStoryTypes);
router.get("/stories/:typeId", protectedRoute, getStories);
router.get("/episodes/:storyId", protectedRoute, getEpisodes);

// create type, story and
router.post("/storyTypes", protectedRoute, storyTypes);
router.post("/story/:typeId", protectedRoute, story);
router.post("/episodes/:storyId", protectedRoute, episodes);

//deleete routes
router.delete("/deleteStory/:id", protectedRoute);
export default router;
