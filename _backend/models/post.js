import mongoose, { Schema } from 'mongoose';

const Comment = new Schema({
    contents: {type: String, required: true },
    auther: {type: String, required: true },
    comment_date: { type: Date, default: Date.now() }
});

const Post = new Schema({
    title: { type: String },
    id: { type: Number },//id : auto increment colomn
    contents: { type: String },
    author: { type: String, default: 'jeong' },
    board_date: { type: Date, default: Date.now() },
    comments: [Comment]
});
//모든 post 가져 오기
Post.static('getAll', function() {
    console.log(this.collection);
    return this.find();
});
//특정 id post 가져 오기
Post.statics.getPostById = function({ id }) {
    return this.findOne({ id });
}
//글 쓰기
Post.statics.writePost = function(title, id, contents, author, board_date=Date.now ) {
    const post = new this({
        title,
        id,
        contents,
        author
    });
    console.log(post);
    post.save();
}
Post.statics.search = function(title) {

}
export default mongoose.model('Post', Post);
