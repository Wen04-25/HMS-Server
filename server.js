const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/hms')
    .then(() => console.log('? MongoDB Connected'))
    .catch(err => console.error('? DB Connection Error:', err));

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
const PORT = 1337;
app.listen(PORT, () => {
    console.log(`?? Server running on http://localhost:${PORT}`);
});
