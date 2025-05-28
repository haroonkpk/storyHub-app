import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
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