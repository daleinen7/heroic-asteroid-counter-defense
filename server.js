const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();

require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Set 'build' folder to serve favicon and static files
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Configure port
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express running on port ${port}`)
});

// API Routes
app.use('/api/users', require('./routes/api/users'));

// Catch-all Route
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

