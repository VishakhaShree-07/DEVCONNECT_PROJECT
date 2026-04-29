const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('register'); 
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/create-post', (req, res) => {
    res.render('create-post');
});

module.exports = router;
