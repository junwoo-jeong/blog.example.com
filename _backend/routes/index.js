import express from 'express';
import post from './post';
import comment from './comment';

const router = express.Router();

router.use('/post', post);
router.use('/comment', comment);

export default router;
