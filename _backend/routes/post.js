import express from 'express';
import Post from './../models/post.js';
import asyncify from 'express-asyncify';
import * as controller from './post.controller.js';

const router = asyncify(express.Router());


router.get('/', controller.getAllPost);
router.get('/write', controller.writePost);
router.get('/:id', function(req, res){
    res.send(`/post/${req.params.id} : success`);
});

export default router;
