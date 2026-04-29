require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB_URI;

mongoose.connect(DB)
    .then(() => console.log('✅ DB connection successful!'))
    .catch(err => console.error('❌ DB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
