// src/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Post must have a title']
    },
    content: {
        type: String,
        required: [true, 'Post must have content']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // This creates a relationship! It tells Mongoose this ID belongs to a User.
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
