import express from 'express';
import asyncify from 'express-asyncify';
import * as controller from './post.controller.js';

const router = express.Router();

router.post('/', (req, res) => {
    const arr = req.body.array;
    console.log(arr);
    res.end();
});


export default router;
