import Story from "../models/story.models";
import User from "../models/user.model";

export const addToFavorites = async (req, res) => {
  const { storyId } = req.params.id;
  if (!storyId) {
    return res.status(404).json({ message: "storyId not found" });
  }
  const story = await Story.findById(storyId);
  if (!story) {
    return res.status(404).json({ message: "story not found" });
  }
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404).json({ message: "Unauthorized" });
  }
  try {
    user.addToFavorites.push(story);
    user.save();
    res.status(201).json({ message: "Story added to favorites" });
  } catch (error) {
    res.status(500).json({ message: "error in adding to favorites", error });
  }
};

export const getFavorites = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "Unauthorized" });
  }
  const favorites = user.addToFavorites;
  if (favorites === 0) {
    return res.status(404).json({ message: "No favorites found" });
  }
  try {
    res.status(201).json({ message: "Story added to favorites", favorites });
  } catch (error) {
    res.status(500).json({ message: "error in adding to favorites", error });
  }
};

export const deleteFavorites = async (req, res) => {
  const { storyId } = req.body;
  if (!storyId) {
    return res.status(404).json({ message: "storyId not found" });
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ message: "Unauthorized" });
  }
  try {
    user.addToFavorites = user.addToFavorites.filter(
      (item) => item.story && item.story.toString() !== storyId
    );
    await user.save();
    res.status(200).json({ message: "Story deleted from favorites" });
  } catch (error) {
    res.status(500).json({ message: "error in deleting to favorites", error });
  }
};
