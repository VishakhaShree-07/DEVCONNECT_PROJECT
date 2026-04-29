const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getSinglePost);

router.post('/', authMiddleware.protect, postController.createPost);
router.delete('/:id', authMiddleware.protect, postController.deletePost);

module.exports = router;
