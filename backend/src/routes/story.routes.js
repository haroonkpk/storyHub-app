import express from 'express';
import { createStorys, deleteStory, getStories } from '../controllers/story.controller.js';
import { protectedRoute } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/createStory',protectedRoute, createStorys);
router.get('/getStories', protectedRoute, getStories);
router.delete('/deleteStory/:id', protectedRoute, deleteStory);
export default router;