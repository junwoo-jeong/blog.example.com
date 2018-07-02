import Post from './../models/post.js';
import moment from 'moment-timezone';

// URL : api/post     METHOD : GET
export const getAllPost = async (req, res) => {
    const post = await Post.getAll();
    console.log(post);
    res.json(post);
}

// URL : api/post/:id     METHOD : GET
export const getPostById = async (req, res) => {
    const targetId = req.params.id;
    try {
        const post = await Post.getPostById(targetId);
        //post 검색에 따라 화면 출력

        res.json(post);
    } catch (error) {
        throw error;
    }

}

// URL : api/post/write     METHOD : POST
export const writePost = async (req, res) => {
    const post = {
        title: req.body.title,
        id: req.body.id,
        contents: req.body.contents,
        author: req.body.author,
        date: moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'),
        comments: []
    }
    try {
        const result = await Post.writePost(post);
        return res.json({
            success: true
        });
    }catch(error){
        throw error;
    };
}

// URL : api/post/update/:id     METHOD : UPDATE
export const updatePost = async (req, res) => {

    try {
        const result = await Post.updatePost()
    }catch(error){

    }
};

// URL : api/post/delete/:id     METHOD : DELETE
export const deletePost = async (req, res) => {

};
