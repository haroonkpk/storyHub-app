import mongoose from "mongoose";
import Episode from "../models/episode.model.js";
import Story from "../models/story.models.js";
import StoryType from "../models/storyType.model.js";

export const storyTypes = async (req, res) => {
  const { img, title, description } = req.body;
  if (!img || !title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const Type = new StoryType({
      img,
      title,
      description,
    });
    await Type.save();
    res.status(201).json({ message: "StoryType created successfully", Type });
  } catch (error) {
    res.status(500).json({ message: "error in creating Type", error });
  }
};

export const story = async (req, res) => {
  const { img, title, description } = req.body;
  const { typeId } = req.params;
  if (!img || !title || !description || !typeId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const story = new Story({
      img,
      title,
      description,
      type: typeId,
    });
    await story.save();
    const populatedType = await Story.findById(story._id).populate("type");

    res
      .status(201)
      .json({ message: "Story created successfully", story: populatedType });
  } catch (error) {
    res.status(500).json({ message: "error in creating story", error });
  }
};

export const episodes = async (req, res) => {
  const { img, title, description } = req.body;
  const { storyId } = req.params;
  if (!img || !title || !description || !storyId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const episode = new Episode({
      img,
      title,
      description,
      story: storyId,
    });
    await episode.save();
    const populatedEpisode = await Episode.findById(episode._id).populate(
      "story"
    );

    res
      .status(201)
      .json({
        message: "episode created successfully",
        episode: populatedEpisode,
      });
  } catch (error) {
    res.status(500).json({ message: "error in creating episode", error });
  }
};

export const getStoryTypes = async (req, res) => {
  try {
    const allStoryTypes = await StoryType.find();
    res.status(201).json({ allStoryTypes });
  } catch (error) {
    res.status(501).json({ message: "error in getStoryType route", error });
  }
};
export const getStory = async (req, res) => {
  const { typeId } = req.params;
  if (!typeId) {
    return res.status(404).json({ message: "Not found typeId" });
  }
  try {
    const selectedTypeStory = await Story.find({
      type: new mongoose.Types.ObjectId(typeId),
    });
    if (!selectedTypeStory) {
      return res.status(404).json({ message: "stories not found" });
    }
    res.status(201).json({ selectedTypeStory });
  } catch (error) {
    console.error("GetStory Error:", error.message);
    res.status(501).json({ message: "error in getStory route", error });
  }
};
export const getEpisodes = async (req, res) => {
  const { storyId } = req.params;
  if (!storyId) {
    return res.status(404).json({ message: "Not found storyId" });
  }
  try {
    const selectedStoryEpisode = await Episode.find({
      story: new mongoose.Types.ObjectId(storyId),
    });
    if (!selectedStoryEpisode) {
      return res.status(404).json({ message: "episode not found" });
    }
    res.status(201).json({ message: "get episodes", selectedStoryEpisode });
  } catch (error) {
    console.error("GetEpisodes Error:", error.message);
    res.status(501).json({ message: "error in getEpisode route", error });
  }
};

export const deleteStory = async (req, res) => {
  const storyId = req.params.id;
  console.log(storyId);
  try {
    const deletedStory = await Story.findByIdAndDelete(storyId);
    if (!deletedStory) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.status(200).json({ message: ".Story deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "error in deleting story", error });
  }
};
