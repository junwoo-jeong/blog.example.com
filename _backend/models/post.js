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
    img: { type: String},
    contents: { type: String },
    author: { type: String, default: 'jeong' },
    date: { type: String },
    category: { type: String },
    tag: [Tag],
    comments: [Comment]
});

// 패이지 별로 post 가져 오기
Post.statics.getPostsPage = function(page) {
    return this.find().sort({ "_id": -1 }).skip((page-1)*5).limit(5);
};

//특정 title post 가져 오기
Post.statics.getPostByTitle = function(title) {
    return this.findOne({ title: title });
};

//글 쓰기
Post.statics.writePost = function({ title, img, contents, author, date, category, tag, comments }) {
    const post = new this({
        title,
        img,
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
            contents,
            author,
            date,
            category,
            tag
        }
    });
}

//글 삭제
Post.statics.deletePost = function(title) {
    return this.findOneAndDelete({title: title});
}

//글 검색
Post.statics.search = function(title) {

}
export default mongoose.model('Post', Post);
