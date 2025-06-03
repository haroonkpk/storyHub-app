import mongoose from 'mongoose';
import User from "./user.model.js";
const storySchema = new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    img: String,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Story = mongoose.model("Story", storySchema);
export default Story;