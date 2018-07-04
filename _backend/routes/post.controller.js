import Post from './../models/post.js';
import moment from 'moment-timezone';
//import queryString from 'query-string'; 나중에 검색 기능 추가할때
//쿼리를 편하게 변경

//console.log(req.baseUrl); return : /api/post
//console.log(req.params); return : { id: '12' }
//console.log(req.path); return : /12

// URL : api/post     METHOD : GET
export const getAllPost = async (req, res) => {
    try {
        const post = await Post.getAll();
        res.json(post);
    } catch (error) {
        throw error;
    }
}

// URL : api/post/:id     METHOD : GET
export const getPostById = async (req, res) => {
    const targetId = req.params.id;
    try {
        const post = await Post.getPostById(targetId);
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
        comments: [],
        category: req.body.category,
        tag: teq.body.tags
    };
    try {
        const result = await Post.writePost(post);
        return res.json({
            success: true
        });
    }catch(error){
        throw error;
    };
}

// URL : api/post/:id/update    METHOD : PUT
export const updatePost = async (req, res) => {
    try {
        const result = await Post.updatePost()
    }catch(error){

    }
};

// URL : api/post/:id/delete    METHOD : DELETE
export const deletePost = async (req, res) => {
    const targetId = req.params.id
    try {

    } catch (error) {

    }
};
