import mongoose, { Schema } from 'mongoose';

const Comment = new Schema({
    contents: {type: String, required: true },
    auther: {type: String, required: true },
    comment_date: { type: Date, default: Date.now() }
});

const Post = new Schema({
    title: { type: String, required: true },
    id: { type: Number, required: true},//id : auto increment colomn
    contents: { type: String, required: true},
    author: { type: String, default: 'jeong' },
    board_date: { type: Date, default: Date.now() },
    comments: [Comment]
});

export default mongoose.model('Post', Post);
