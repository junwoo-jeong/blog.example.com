import Comment from './../models/comment.js';
import moment from 'moment-timezone';


// URL : api/comment/:targetId     METHOD : POST
export const writeComment = async (req, res) => {
    const targetId = req.body.id;
    const comment = {
        contents: req.body.contents,
        author: req.body.author,
        date: moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss')
    }
    try {
        var result = await Comment.writeComment(targetId, comment);
        return res.json({
            success: true
        });
    }catch(error){
        throw error;
    };
}
