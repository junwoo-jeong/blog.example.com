import express from 'express';

const router = express.Router();


router.get('/', function(req, res){
    res.send('/post : success');
});
router.get('/:id', function(req, res){
    res.send(`/post/${req.params.id} : success`);
});


export default router;
