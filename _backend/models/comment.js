import mongoose, { Schema } from 'mongoose';
import post from './post';

const Comment = new Schema({
    contents: {type: String, required: true },
    author: {type: String, required: true },
    date: { type: String }
});

Comment.statics.writeComment = function(targetId, { contents, author, date }) {
    const comment = new this({
        contents,
        author,
        date
    });
    return post.findOneAndUpdate({id: targetId}, {$push: {comments: comment}});
};

export default mongoose.model('Comment', Comment);
