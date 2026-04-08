const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const projectRoutes = require('./routes/project');

const path = require("path");

app.use(
  require("express").static(
    path.join(__dirname, "../frontend")
  )
);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.static('../frontend'));  // Serve static frontend files
const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend')));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/project', projectRoutes);

// Default route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../frontend/index.html');
});

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

mongoose.connection.once('open', () => {
  console.log("Connected DB:", mongoose.connection.name);
});

module.exports = app;

