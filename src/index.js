// Import the top-level function of express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Creates an Express application using the top-level function
const app = express();
const jwt = require('jsonwebtoken');
var sessionMW = require('./common/session');

var cert = require('fs').readFileSync(__dirname + '/../key/jwtRS256.key');

// Define port number as 3000
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'))
// common middleware
// app.use(sessionMW);

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.urlencoded({ extended: true }));

// specifix middleware
app.post('/login', sessionMW);
app.post('/create-user', function(req, res) {
    let user = {
        'username': 'dangvanduc90',
        'email': 'dangvanduc0@gmail.com',
    }
    var token = jwt.sign(user, cert, { algorithm: 'RS256' });
    res.send(token);
});

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(req, res) {
    res.send('Hello, World!');
});
app.post('/', function(req, res) {
    res.send('Hello, Post Method!');
});
 
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

// Make the app listen on port 3000
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
});