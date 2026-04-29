const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name email');
        res.status(200).json({ status: 'success', data: { posts } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.getSinglePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'name email');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ status: 'success', data: { post } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        
        const newPost = await Post.create({
            title,
            content,
            author: req.user._id 
        });

        res.status(201).json({
            status: 'success',
            data: { post: newPost }
        });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'You do not have permission to delete this post' });
        }

        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: 'success', message: 'Post deleted successfully' });

    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};
