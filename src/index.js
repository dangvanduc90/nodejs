// Import the top-level function of express
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
var compression = require('compression')
import routes from './routes'

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

// console.log(app.get('env'))

// compress all responses
app.use(compression())
app.use(routes)

// Make the app listen on port 3000
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
});