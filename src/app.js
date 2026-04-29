const express = require('express');
const path = require('path');
const app = express();
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');
const viewRoutes = require('./routes/viewRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', viewRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
