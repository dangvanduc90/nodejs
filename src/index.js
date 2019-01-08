// Import the top-level function of express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Creates an Express application using the top-level function
const app = express();

// Define port number as 3000
const port = process.env.PORT || 3000;

app.use(cors());

app.use(function(req, res, next) {
    next();
});

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.urlencoded({ extended: true }));

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.post('/', function(req, res) {
    console.log(req.body.name); 
    res.send('Hello, ư!');
});

// Make the app listen on port 3000
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
});
