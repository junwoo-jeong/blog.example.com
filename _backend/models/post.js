import mongoose, { Schema } from 'mongoose';

const Tag = new Schema({
    title: {type: String}
});

const Comment = new Schema({
    contents: {type: String, required: true },
    auther: {type: String, required: true },
    comment_date: { type: String }
});

const Post = new Schema({
    title: { type: String },
    id: { type: Number }, //id : auto increment colomn
    contents: { type: String },
    author: { type: String, default: 'jeong' },
    date: { type: String },
    category: { type: String },
    tag: [Tag],
    comments: [Comment]
});

//모든 post 가져 오기
Post.statics.getAll = function() {
    return this.find();
};

//특정 id post 가져 오기
Post.statics.getPostById = function(targetId) {
    return this.findOne({ id: targetId });
};

//글 쓰기
Post.statics.writePost = function({ title, id, contents, author, date, category, tag, comments }) {
    const post = new this({
        title,
        id,
        contents,
        author,
        date,
        category,
        tag,
        comments
    });
    post.save();
}

//글 수정
Post.statics.updatePost = function(targetId, {title, contents, author, date, category, tag }) {
    return this.findOneAndUpdate({id: targetId},{
        $set: {
            title,
            id: targetId,
            contents,
            author,
            date,
            category,
            tag
        }
    });
}

//글 삭제
Post.statics.deletePost = function(targetId) {
    return this.findOneAndDelete({id: targetId});
}

//글 검색
Post.statics.search = function(title) {

}

export default mongoose.model('Post', Post);
