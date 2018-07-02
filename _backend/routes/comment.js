import express from 'express';
import asyncify from 'express-asyncify';
import * as controller from './comment.controller.js';

const router = asyncify(express.Router());

router.post('/write', controller.writeComment);

export default router;
