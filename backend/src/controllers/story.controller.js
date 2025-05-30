import Story  from "../models/story.models.js";
export const createStorys = async (req, res) => {
    const {img, title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const story = new Story({
            img,
            title,
            content
        });
        await story.save();
    } catch (error) {
        res.status(500).json({ message: "error in creating story", error });
    }
};

export const getStories = async (req, res ) => {
    const storys = await Story.find({});
    if (!storys) {
        return res.status(404).json({ message: "No One stories Found" });
    }
    try {
        res.status(200).json(storys);
    } catch (error) {
        res.status(500).json({ message: "error in getting stories", error });
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


