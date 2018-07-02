import express from 'express';
import asyncify from 'express-asyncify';
import * as controller from './post.controller.js';

const router = asyncify(express.Router());


router.get('/', controller.getAllPost);
router.get('/:id', controller.getPostById);
router.post('/write', controller.writePost);


export default router;
