import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Story",
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const Episode = mongoose.model("Epesode", episodeSchema);

export default Episode;
