import express from 'express';
import { createStorys, deleteStory, getStories } from '../controllers/story.controller.js';
const router = express.Router();

router.post('/createStory', createStorys);
router.get('/getStories', getStories);
router.delete('/deleteStory/:id', deleteStory)
export default router;