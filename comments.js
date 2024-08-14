// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create comments array
const comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(3001, () => {
  console.log('Server started on http://localhost:3001');
});