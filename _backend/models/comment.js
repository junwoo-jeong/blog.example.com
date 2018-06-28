import mongoose, { Schema } from 'mongoose';

const Comment = new Schema({
    contents: {type: String, required: true },
    auther: {type: String, required: true },
    comment_date: { type: Date, default: Date.now() }
});

export default mongoose.model('Comment', Comment);
