// Import the top-level function of express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Creates an Express application using the top-level function
const app = express();
var sessionMW = require('./common/session');

// Define port number as 3000
const port = process.env.PORT || 3000;

app.use(cors());

// middleware
app.use(sessionMW);

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.urlencoded({ extended: true }));

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(req, res) {
    res.send('Hello, World!');
});
app.post('/', function(req, res) {
    res.send('Hello, Post Method!');
});

// Make the app listen on port 3000
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
});