import Post from './../models/post.js';

export const getAllPost = async (req, res) => {
        const post = await Post.getAll();
        console.log("실행됨 : ");
        res.send(post);
}

export const writePost = async (req, res) => {
    const title = 'asdasd';
    const id = 1;
    const contents = 'req.body.contents';
    const author = 'req.body.author';

    var result = await Post.writePost(title, id, contents, author);
    console.log(result);
    return res.json({
        success: true
    });
}
