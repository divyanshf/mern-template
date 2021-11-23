require('dotenv').config();
require('./config/dbConfig').config();
const express = require('express');
const homeRoutes = require('./routes/home');
const path = require('path');

// Setup
const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../client', 'build')));

// Routes
app.use('/', homeRoutes);

// Production routes for client
if (process.env.NODE_ENV === 'production') {
    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Listen
app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`);
});
