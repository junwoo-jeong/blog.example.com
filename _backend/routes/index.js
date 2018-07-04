import express from 'express';
import post from './post';
import comment from './comment';
import test from './testRouter';

const router = express.Router();

router.use('/post', post);
router.use('/comment', comment);
router.use('/test', test);

export default router;
